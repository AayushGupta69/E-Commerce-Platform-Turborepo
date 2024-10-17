import { Router } from "express";

const router: Router = Router();

router.post("/signup", async (req: any, res: any) => {
  const { name, phone, email, password } = req.body;
});

export default router;
