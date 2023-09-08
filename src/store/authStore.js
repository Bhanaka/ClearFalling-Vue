import { defineStore } from "pinia";


export const useAuthStore =  defineStore('auth', {
    state: () => ({
      username: null,
      password: null,
      isLoggedIn: false,
      userInfor : {},
    }),
    actions: {
      login(username, password) {
        // Here, you can perform authentication logic.
        // For simplicity, we'll just store the username and set isLoggedIn to true.
        this.username = username;
        this.password = password;
        this.isLoggedIn = true;
      },
      logout() {
        // Clear the user's data and set isLoggedIn to false.
        this.username = null;
        this.password = null;
        this.isLoggedIn = false;
      },
      setName(newName) {
        this.username = newName;
      },
      setUserInfor(newInfor){
        this.userInfor = newInfor ;
      }
    },
  });