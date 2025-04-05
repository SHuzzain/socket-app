import z from "zod";
//user schema
export const userSchema = z.object({
  id: z.string().uuid(),
  name: z
    .string()
    .min(4, "Minimum 4 characters")
    .max(12, "Maximum  12 characters"),
  email: z.string().email(),
  password: z.string().min(8, "Maximum 8 characters"),
  avatar: z.string().url(),
  groupChatIds: z.array(z.string().uuid()),
});

//login schema
export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});

//register schema
export const registerSchema = userSchema
  .pick({
    email: true,
    password: true,
    avatar: true,
    name: true,
  })
  .extend({
    confirmPassword: z.string().min(8, "Maximum 8 characters"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords doesn't match",
        path: ["confirmPassword"],
      });
    }
  });

//type-safe
export type UserType = z.infer<typeof userSchema>;
export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof registerSchema>;
