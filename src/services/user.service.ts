import { Api } from "../api";

const UserApi = {
  getUser: (account: String) =>
    Api.get(`/user/${account}`).then((response) => response.data),
  getUserByCpf: (cpf: String) =>
    Api.get(`/user/cpf/${cpf}`).then((response) => response.data),
};

export { UserApi };
