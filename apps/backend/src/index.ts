import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("Backend started on port", port);
});
