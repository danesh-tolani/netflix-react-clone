import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// this baseURL will be same for all the urls, only the last part will change

// instance.get("/foo-bar"); // this means url will be "http://api.themoviedb.org/3/foo-bar"

export default instance; // we exported it as default so while importing we can give any name
