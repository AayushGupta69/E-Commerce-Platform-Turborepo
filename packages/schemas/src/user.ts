import { z } from "zod";

export const userSignUpSchema = z.object({
  name: z.string(),
  phone: z.string().min(10),
  email: z.string().email(),
  password: z.string(),
});
