"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    MONGODB_URL: process.env.MONGODB_URL ||
        "mongodb+srv://gurbans:157829ab_@mflix.l0eg7y4.mongodb.net/test?authMechanism=SCRAM-SHA-1",
    PORT: process.env.PORT || 3000,
};
//# sourceMappingURL=db.config.js.map