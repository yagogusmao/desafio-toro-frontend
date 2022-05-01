import axios from "axios";

const [localhost] = [process.env.LOCALHOST];

const Api = axios.create({
  baseURL: localhost,
});

export { Api };
