import { HttpResponse, http } from "msw";
import { usersMock } from "./usersMock";

export const handlers = [
  http.get(`${import.meta.env.VITE_USER_SEARCH_API_URL}?q=user1`, () => {
    return HttpResponse.json({ items: usersMock }, { status: 200 });
  }),
];

export const errorHandlers = [
  http.get(`${import.meta.env.VITE_POSTS_API_URL}?q=user1`, () => {
    return new HttpResponse("Could not find the user", { status: 404 });
  }),
];
