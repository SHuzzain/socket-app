import { useMutation } from "@tanstack/react-query";

import { GetUserType } from "../schema";

export const useFetchByToken = () => {
  const mutation = useMutation<GetUserType, Error, { token: string }>({
    mutationFn: async (value) => {
      // api call goes here

      console.log({ value });
      return {
        avatar: "",
        email: "shahinhuzzins@gmail.com",
        groupChatIds: [""],
        id: "fsfsfsrg",
        name: "shahin",
        token: "1234567889",
      };
    },
  });

  return mutation;
};
