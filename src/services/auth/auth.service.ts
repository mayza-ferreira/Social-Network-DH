import { AuthResponseType, LoginResponseType } from "@/types/auth.types";
import { createClient, RedisClientType } from "redis";
import { v4 as uuidv4 } from "uuid";
import { AccessDeniedError } from "../common/https.errors";
import authApi from "./auth.api";

const TEN_MINUTE = 60 * 10;

class AuthService {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: "redis://default:SocialNetworkPass@localhost:6379",
    });

    this.client.connect().then(() => {
      console.log("Redis client connected");
    });
  }

  async authenticate(
    username: string,
    password: string
  ): Promise<AuthResponseType> {
    const loginResponse = await authApi.loginInternal(username, password);
    return this.buildAuthResponse(loginResponse);
  }

  async register(
    username: string,
    password: string,
    name: string,
    photoUrl: string
  ): Promise<AuthResponseType> {
    const loginResponse = await authApi.registerInternal(
      username,
      password,
      name,
      photoUrl
    );
    return this.buildAuthResponse(loginResponse);
  }

  buildAuthResponse(loginResponse: LoginResponseType): AuthResponseType {
    const sessionId = uuidv4();
    const now = new Date();
    const expireAt = new Date(now.getTime() + TEN_MINUTE * 1000).getTime();
    this.client.set(sessionId, loginResponse.accessToken, { EX: TEN_MINUTE });
    return {
      sessionId: sessionId,
      expireAt: expireAt,
      user: loginResponse.user,
    };
  }

  async getAccessToken(sessionId?: string): Promise<string> {
    if (!sessionId)
      throw new AccessDeniedError("Session ID is not valid anymore");
    const accessToken = await this.client.get(sessionId);

    if (!accessToken)
      throw new AccessDeniedError("Session ID is not valid anymore");

    return accessToken;
  }
  async getRedisValue(key: string): Promise<string | null> {
    return await this.client.get(key);
  }
  async logout(sessionId: string): Promise<void> {
    await this.client.del(sessionId);
  }
}

const authService = new AuthService();
export default authService;
