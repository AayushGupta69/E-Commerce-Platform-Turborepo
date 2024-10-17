import express from "express";
import "dotenv/config";
import rootRouter from "./routes/index";

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use("/api/v1", rootRouter);

app.listen(port, () => {
  console.log("Backend started on port", port);
});
