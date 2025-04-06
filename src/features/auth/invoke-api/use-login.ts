import { useMutation } from "@tanstack/react-query";

import authEndpoint from "../endpoint";
import { GetUserType, LoginUserType } from "../schema";

export const useLogin = () => {
  const mutation = useMutation<GetUserType, Error, LoginUserType>({
    mutationFn: authEndpoint.login,
  });

  return mutation;
};
