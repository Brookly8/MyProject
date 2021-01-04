import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "873418fd-67f4-4822-9c6a-fcfeafb67a96"
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    unfollowButton(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followButton(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    userProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    userLogin() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}