import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dbConfig from "../../config/db.config";

export const jwtSign = async (req: Request, res: Response) => {
  try {
    const { email, username } = req.body;

    const payload = {
      email,
      iat: Math.floor(Date.now() / 1000),
    };

    const jwtToken = jwt.sign(payload, dbConfig.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json(jwtToken);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const jwtVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      throw Error("Token is Expected");
    } else {
      const jwtToken = bearerToken.split(" ")[1];

      const decoded = jwt.verify(jwtToken, dbConfig.SECRET_KEY);
      console.log("decoded", decoded);
      next();
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
