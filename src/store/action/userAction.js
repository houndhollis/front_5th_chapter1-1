import { store } from "../store";

export const userAction = {
  login(username) {
    return store.set("user", JSON.stringify({ username, email: "", bio: "" }));
  },
  logout() {
    return store.remove("user");
  },
  getUserProfile() {
    return store.get("user");
  },
  checkIsLoginStatus() {
    return Boolean(store.get("user"));
  },
  updateUserProfile(username, email, bio) {
    return store.set(
      "user",
      JSON.stringify({ username: username, email: email, bio: bio }),
    );
  },
};
