import { MainPage } from "../pages/MainPage.js";
import { ProfilePage } from "../pages/ProfilePage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { ErrorPage } from "../pages/ErrorPage.js";
import { userAction } from "../action/userAction.js";

const route = {
  "#/": MainPage,
  "#/login": LoginPage,
  "#/profile": ProfilePage,
};

export const moveToPage = (page) => {
  if (page === "##") {
    // 로그아웃 버튼을 눌렀을 경우
    userAction.logout();
    page = "#/login";
  }

  if (!page.startsWith("#")) {
    page = `#${page}`;
  }
  window.location.hash = page;
};

export const hashRender = () => {
  const root = document.getElementById("root");

  const pathname = window.location.hash || "#/";

  if (pathname === "#/profile" && !userAction.checkIsLoginStatus()) {
    return moveToPage("#/login");
  }

  if (pathname === "#/login" && userAction.checkIsLoginStatus()) {
    return moveToPage("#/");
  }

  const page = route[pathname] || ErrorPage;

  root.innerHTML = page();
  document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", (event) => {
      event.preventDefault();
      moveToPage(`#${a.getAttribute("href")}`);
    });
  });

  root.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.target.id === "login-form") {
      const username = event.target.elements.username.value;
      userAction.login(username);
      moveToPage("#/profile");
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

window.addEventListener("hashchange", hashRender);

hashRender();
