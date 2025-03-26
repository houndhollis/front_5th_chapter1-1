import { MainPage } from "../pages/MainPage.js";
import { ProfilePage } from "../pages/ProfilePage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { ErrorPage } from "../pages/ErrorPage.js";
import { userAction } from "../store/action/userAction.js";

const isProduction = import.meta.env.MODE === "production";
const BASE_ROUTE = isProduction ? "/front_5th_chapter1-1" : "";

const route = {
  [`${BASE_ROUTE}/`]: MainPage,
  [`${BASE_ROUTE}/login`]: LoginPage,
  [`${BASE_ROUTE}/profile`]: ProfilePage,
};

export const moveToPage = (page) => {
  window.history.pushState(null, null, [`${BASE_ROUTE}${page}`]);
  render();
};

let isEventAttached = false;

export const render = () => {
  const root = document.getElementById("root");

  const pathname = window.location.pathname;

  if (pathname === "/profile" && !userAction.checkIsLoginStatus()) {
    return moveToPage("/login");
  }

  if (pathname === "/login" && userAction.checkIsLoginStatus()) {
    return moveToPage("/");
  }

  const page = route[pathname] || ErrorPage;

  root.innerHTML = page();

  if (isEventAttached) return;
  isEventAttached = true;

  root.addEventListener("click", (event) => {
    const target = event.target.closest("a");
    if (!target) return;

    event.preventDefault();

    if (target.id === "logout") {
      userAction.logout();
      moveToPage("/login");
      return;
    }

    moveToPage(target.pathname);
  });

  root.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.target.id === "login-form") {
      const username = event.target.elements.username.value;

      userAction.login(username);
      moveToPage("/profile");
    }

    if (event.target.id === "profile-form") {
      const username = event.target.elements.username.value;
      const email = event.target.elements.email.value;
      const bio = event.target.elements.bio.value;
      userAction.updateUserProfile(username, email, bio);
      alert("프로필이 업데이트되었습니다.");
    }
  });
};

window.addEventListener("popstate", render);
