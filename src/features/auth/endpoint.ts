import axiosClient from "@/api/axios-client";

import { GetUserType, LoginUserType } from "./schema";

const authEndpoint = {
  login: (data: LoginUserType): Promise<GetUserType> => {
    return axiosClient.post("login", data);
  },
};

export default authEndpoint;
