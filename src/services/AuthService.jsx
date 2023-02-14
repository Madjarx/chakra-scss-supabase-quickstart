class AuthService {

  logout() {
    localStorage.removeItem("admin");
  }

  getCurrentUser() {
    let user = JSON.parse(localStorage.getItem("admin"));
    return user;
  }
};

export default new AuthService();
