import LoginScheme from "@/schemes/login.scheme";
import authService from "@/services/auth/auth.service";
import { AccessDeniedError } from "@/services/common/https.errors";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const { username, password } = await LoginScheme.validateSync(
    await request.json()
  );

  try {
    const loginResponse = await authService.authenticate(username, password);

    (await cookies()).set("SocialSessionID", loginResponse.sessionId, {
      expires: loginResponse.expireAt,
      httpOnly: true,
      secure: true,
      domain: "localhost",
      path: "/",
    });
    (await cookies()).set("SocialUsername", loginResponse.user.username, {
      expires: loginResponse.expireAt,
      httpOnly: false,
      secure: true,
      domain: "localhost",
      path: "/",
    });

    return new Response(JSON.stringify(loginResponse.user), {
      status: 200,
    });
  } catch (e) {
    if (e instanceof AccessDeniedError) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials for user: " + username }),
        {
          status: 403,
        }
      );
    } else {
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
      });
    }
  }
}
