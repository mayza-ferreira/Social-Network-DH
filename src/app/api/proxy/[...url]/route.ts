import httpInternalApi from "@/services/common/http.internal.service";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const url = request.url.split("/proxy")[1];
  const accesToken = (await headers()).get("x-social-access-token");
  const body = await request.json();

  console.log(JSON.stringify({ url: url, accesToken: accesToken, body: body }));

  const response = await httpInternalApi.httpPost(
    url,
    body,
    accesToken ?? undefined
  );

  return new Response(JSON.stringify(response), {
    status: 200,
  });
}
