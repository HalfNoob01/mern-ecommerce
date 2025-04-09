import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/products", productRouter);

mongoose.connect(
  "mongodb+srv://1221:1221@cluster0.xgomh64.mongodb.net/e-ecommerce?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(3001, () => console.log("Server started"));
