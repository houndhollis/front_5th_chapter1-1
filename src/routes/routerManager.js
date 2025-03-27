import { routerRender } from "./routerRender";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";

export const routerState = {
  mode: "",
  basePath: "",
  isEventAttached: false,

  getRoute() {
    return {
      [`${routerState.basePath}/`]: MainPage,
      [`${routerState.basePath}/login`]: LoginPage,
      [`${routerState.basePath}/profile`]: ProfilePage,
    };
  },
};

export const routerManager = (mode) => {
  const isProduction = import.meta.env.MODE === "production";

  routerState.basePath = isProduction ? "/front_5th_chapter1-1" : "";
  routerState.mode = mode;

  routerRender();
};
