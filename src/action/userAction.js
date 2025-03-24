import { store } from "../store/store";

export const userAction = {
  checkIsLoginStatus() {
    return Boolean(store.get("user"));
  },
  getUserProfile() {
    return store.get("user");
  },
  updateUserProfile(username, email, bio) {
    return store.set(
      "user",
      JSON.stringify({ username: username, email: email, bio: bio }),
    );
  },
  login(username) {
    return store.set("user", JSON.stringify({ username, email: "", bio: "" }));
  },
  logout() {
    return store.remove("user");
  },
};
