import axios from "axios";

const todoApi = axios.create({
  method: "post",
  baseURL : "https://www.pre-onboarding-selection-task.shop",
  headers:{
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
})

export default todoApi;