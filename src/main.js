import { MainPage } from "./pages/MainPage.js";
import { ProfilePage } from "./pages/ProfilePage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { ErrorPage } from "./pages/ErrorPage.js";

document.body.innerHTML = `
  ${MainPage()}
  ${ProfilePage()}
  ${LoginPage()}
  ${ErrorPage()}
`;
