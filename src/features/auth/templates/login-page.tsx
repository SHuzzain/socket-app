import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/atoms/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/molecules/form";
import { Input } from "@/components/atoms/input";

import { useLogin } from "../invoke-api/use-login";
import { loginSchema, LoginType } from "../schema";
import FormContainer from "../components/form-container";

const LoginPage = () => {
  const { mutate } = useLogin();
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (value: LoginType) => {
    mutate(value);
  };
  return (
    <FormContainer formType="login">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size={"lg"} className="w-full">
            Sign in
          </Button>
        </form>
      </Form>
    </FormContainer>
  );
};

export default LoginPage;
