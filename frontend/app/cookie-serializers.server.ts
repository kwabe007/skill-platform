import { createCookie } from "react-router";

const toastCookieSerializer = createCookie("show-toast");

export { toastCookieSerializer };
