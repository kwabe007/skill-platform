import { createCookie, createCookieSessionStorage } from "react-router";
import { z } from "zod";

const { getSession, commitSession } = createCookieSessionStorage({
  cookie: {
    name: "__toast",
    httpOnly: true,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
  },
});

export async function setToastSession(
  message: string,
): Promise<Record<string, string>> {
  const session = await getSession();
  session.flash("message", message);
  return {
    "Set-Cookie": await commitSession(session),
  };
}

export async function readToastSession(
  request: Request,
): Promise<{ message: string | undefined; headers: Record<string, string> }> {
  const session = await getSession(request.headers.get("Cookie"));
  const data = session.get("message");
  const result = z.string().optional().safeParse(data);

  let message: string | undefined;
  if (result.error) {
    console.error(result.error);
    message = undefined;
  } else {
    message = result.data;
  }
  return {
    message,
    headers: { "Set-Cookie": await commitSession(session) },
  };
}
