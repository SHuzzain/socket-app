import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_API_BASE_URL: z.string().url(),
    VITE_SOCKET_URL: z.string().url(),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,

  onValidationError: (error) => {
    console.error("❌ Invalid environment variables:", error);
    throw new Error("Invalid environment configuration");
  },
});
