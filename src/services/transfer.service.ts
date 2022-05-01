import { Api } from "../api";

const TransferApi = {
  createTransfer: (body: Object) =>
    Api.post(`spb/events`, body).then((response) => response.data),
};

export { TransferApi };
