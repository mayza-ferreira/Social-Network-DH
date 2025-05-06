import { HttpBaseAPI } from "./http.service";

const API_URL = "http://localhost:8080/api";
const API_PUBLIC_ENDPOINT = `/public`;

class HttpInternalAPI extends HttpBaseAPI {
  constructor() {
    super(API_URL, API_PUBLIC_ENDPOINT);
  }
}

const httpInternalApi = new HttpInternalAPI();
export default httpInternalApi;
