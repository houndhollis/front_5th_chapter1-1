import { ErrorPage } from "../pages/ErrorPage";

import { moveToPage } from "./utils/moveToPage";
import { userAction } from "../store/action/userAction";
import { routerState } from "./routerManager";
import { routerAddEvent } from "./routerAddEvent";

export const routerRender = () => {
  const root = document.getElementById("root");

  const route = routerState.getRoute();
  const pathname = window.location.pathname;

  if (pathname === "/profile" && !userAction.checkIsLoginStatus()) {
    return moveToPage("/login");
  }

  if (pathname === "/login" && userAction.checkIsLoginStatus()) {
    return moveToPage("/");
  }

  const page = route[pathname] || ErrorPage;
  root.innerHTML = page();

  if (!routerState.isEventAttached) {
    routerState.isEventAttached = true;
    return routerAddEvent(root);
  }
};

window.addEventListener("popstate", routerRender);
