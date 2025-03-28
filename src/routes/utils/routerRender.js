import { ErrorPage } from "../../pages/ErrorPage";

import { moveToPage } from "./moveToPage";
import { userAction } from "../../store/action/userAction";
import { routerState } from "../routerManager";
import { routerHistoryEvent } from "./routerHistoryEvent";
import { routerHashEvent } from "./routerHashEvent";

export const routerRender = () => {
  const root = document.getElementById("root");
  const route = routerState.getRoute();
  const isLogin = userAction.checkIsLoginStatus();
  const pathname =
    routerState.mode === "history"
      ? window.location.pathname
      : window.location.hash || "#/";

  if (routerState.mode === "history") {
    if (pathname === "/profile" && !isLogin) {
      return moveToPage("/login");
    }
    if (pathname === "/login" && isLogin) {
      return moveToPage("/");
    }
  } else {
    if (pathname === "#/profile" && !isLogin) {
      return moveToPage("/login");
    }
    if (pathname === "#/login" && isLogin) {
      return moveToPage("/");
    }
  }

  const page = route[pathname] || ErrorPage;
  root.innerHTML = page();

  if (!routerState.isEventAttached) {
    routerState.isEventAttached = true;

    return routerState.mode === "history"
      ? routerHistoryEvent(root)
      : routerHashEvent(root);
  }
};

window.addEventListener("popstate", routerRender);
window.addEventListener("hashchange", routerRender);
