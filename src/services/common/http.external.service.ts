import { HttpBaseAPI } from "./http.service";

const API_URL = "http://localhost:3000/api";
const API_PUBLIC_ENDPOINT = `/public`;

class HttpExternalAPI extends HttpBaseAPI {
  constructor() {
    super(API_URL, API_PUBLIC_ENDPOINT);
  }}

const httpExternalApi = new HttpExternalAPI();
export default httpExternalApi;
