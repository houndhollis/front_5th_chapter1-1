import { routerRender } from "./utils/routerRender";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";

export const routerState = {
  mode: "",
  basePath: "",
  isEventAttached: false,

  getRoute() {
    const prefix = this.mode === "history" ? "/" : "#/";
    const productBasePath =
      import.meta.env.MODE === "production" ? "/front_5th_chapter1-1" : "";
    return {
      [`${productBasePath}${prefix}`]: MainPage,
      [`${productBasePath}${prefix}login`]: LoginPage,
      [`${productBasePath}${prefix}profile`]: ProfilePage,
    };
  },
};

export const routerManager = (mode) => {
  const isProduction = import.meta.env.MODE === "production";
  routerState.basePath = isProduction ? "/front_5th_chapter1-1" : "";
  routerState.mode = mode;

  routerRender();
};
