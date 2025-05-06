import RegisterScheme from "@/schemes/register.scheme";
import authService from "@/services/auth/auth.service";
import { ConflictError } from "@/services/common/https.errors";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password, name, photoUrl } =
    await RegisterScheme.validateSync(await request.json());

  try {
    const registerResponse = await authService.register(
      username,
      password,
      name,
      photoUrl
    );
    (await cookies()).set("SocialSessionID", registerResponse.sessionId, {
      expires: registerResponse.expireAt,
      httpOnly: true,
      secure: true,
      domain: "localhost",
      path: "/",
    });
    (await cookies()).set("SocialUsername", registerResponse.user.username, {
      expires: registerResponse.expireAt,
      httpOnly: false,
      secure: true,
      domain: "localhost",
      path: "/",
    });

    return new Response(JSON.stringify(registerResponse.user), {
      status: 200,
     
    });
  } catch (e) {
    if (e instanceof ConflictError) {
      return new Response(
        JSON.stringify({ error: "Username is alredy taken: " + username }),
        {
          status: 409,
        }
      );
    } else {
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
      });
    }
  }
}
