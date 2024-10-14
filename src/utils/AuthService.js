import { toast } from "sonner";

export default class AuthService {
  static getToken() {
    return localStorage.getItem("token");
  }

  static setToken(token) {
    localStorage.setItem("token", token);
  }

  static getUser() {
    return localStorage.getItem("user");
  }

  static setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  static authorize(role) {
    const userRole = localStorage.getItem("role");
    if (userRole === null``) {
      return false;
    }

    return role.includes(userRole);
  }

  static unauthorizedRedirect(
    navigate,
    text = "Anda tidak memiliki akses ke halaman ini. Insiden ini telah dilaporkan.",
  ) {
    toast.error(text);
    if (AuthService.getToken()) {
      navigate("/");
    }
  }
}
