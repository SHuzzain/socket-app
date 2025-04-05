import { useMutation } from "@tanstack/react-query";
import { LoginType } from "../schema";

export const useLogin = () => {
  const mutation = useMutation<{ success: boolean }, Error, LoginType>({
    mutationFn: async (value) => {
      // api call goes here
      console.log({ value });
      return {
        success: true,
      };
    },
  });

  return mutation;
};
