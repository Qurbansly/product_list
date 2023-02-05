import express from "express";
import { jwtSign, jwtVerify } from "../controller/jwt.controller";

const jwtRoute = express.Router();

jwtRoute.post("/jwtSign", jwtSign);

jwtRoute.post("/jwtVerify", jwtVerify);

export default jwtRoute;
