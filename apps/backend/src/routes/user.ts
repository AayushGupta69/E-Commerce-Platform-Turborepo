import { Router } from "express";
import { userSignUpSchema } from "@e-commerce-platform/schemas";
import prisma from "@e-commerce-platform/database/client";
import bcrypt from "bcrypt";

const router: Router = Router();

router.post("/signup", async (req: any, res: any) => {
  const { success, data, error } = userSignUpSchema.safeParse(req.body);

  if (!success) {
    console.error(error);
    return res.status(411).json({
      message: "Invalid inputs. Please provide valid inputs.",
    });
  }

  const password = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      phone: data.phone,
      email: data.email,
      password,
    },
  });

  return res.status(201).json({
    message: "Welcome! Your account has been created successfully!",
    user,
  });
});

export default router;
