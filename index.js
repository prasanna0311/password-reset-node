import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// mongo db connection

const url =`mongodb+srv://prasanna:${process.env.MONGOPASSWORD}@cluster0.nx947.mongodb.net/myFirstDatabase`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (request, respone) => {
  respone.send("Password reseter app is running...");
});

app.use("/users", userRouter);

app.listen(PORT, () => console.log("The server is started in " + PORT));


