"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_controller_1 = require("../controller/jwt.controller");
const jwtRoute = express_1.default.Router();
jwtRoute.post("/jwtSign", jwt_controller_1.jwtSign);
// jwtRoute.post("/jwtVerify", jwtVerify);
exports.default = jwtRoute;
//# sourceMappingURL=jwt.routes.js.map