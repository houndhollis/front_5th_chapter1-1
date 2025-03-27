import { routerState } from "../routerManager";
import { routerRender } from "../routerRender";

export const moveToPage = (page) => {
  if (routerState.mode !== "hash") {
    window.history.pushState(null, null, `${routerState.basePath}${page}`);
    routerRender();
  }
};
