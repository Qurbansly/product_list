"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerify = exports.jwtSign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_config_1 = __importDefault(require("../../config/db.config"));
const jwtSign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username } = req.body;
        const payload = {
            email,
            iat: Math.floor(Date.now() / 1000),
        };
        const jwtToken = jsonwebtoken_1.default.sign(payload, db_config_1.default.SECRET_KEY, {
            expiresIn: "1h",
        });
        res.json(jwtToken);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
exports.jwtSign = jwtSign;
const jwtVerify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bearerToken = req.headers.authorization;
        if (!bearerToken) {
            throw Error("Token is Expected");
        }
        else {
            const jwtToken = bearerToken.split(" ")[1];
            const decoded = jsonwebtoken_1.default.verify(jwtToken, db_config_1.default.SECRET_KEY);
            console.log("decoded", decoded);
            next();
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
exports.jwtVerify = jwtVerify;
//# sourceMappingURL=jwt.controller.js.map