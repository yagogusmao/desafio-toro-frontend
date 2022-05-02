import { Api } from "../api";

const UserApi = {
  getUser: (account: string) =>
    Api.get(`/user/${account}`).then((response) => response.data),
  getUserByCpf: (cpf: string) =>
    Api.get(`/user/cpf/${cpf}`).then((response) => response.data),
};

export { UserApi };
