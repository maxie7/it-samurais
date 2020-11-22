import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "6c5af8b1-d9ea-4d3a-9488-6087b2606387"
  }
})

export const usersAPI = {
  requestUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  unfollow(userId) {
    return instance.delete(`follow/` + userId)
      .then(response => response.data);
  },

  follow(userId) {
    return instance.post(`follow/` + userId)
      .then(response => response.data);
  }
}

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
      .then(response => response.data);
  },
  logout() {
    return instance.delete(`auth/login`)
      .then(response => response.data);
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
      .then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
      .then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
      .then(response => response.data);
  }
}
