import { MainPage } from "../pages/MainPage.js";
import { ProfilePage } from "../pages/ProfilePage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { ErrorPage } from "../pages/ErrorPage.js";

const route = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

const moveToPage = (page) => {
  window.history.pushState(null, null, page);
  render();
};

export const render = () => {
  const pathname = window.location.pathname;
  const page = route[pathname] || ErrorPage;
  document.getElementById("root").innerHTML = page();

  document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      moveToPage(a.pathname);
    });
  });
};

window.addEventListener("popstate", render);
