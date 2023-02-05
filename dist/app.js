"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database/database"));
const order_routes_1 = __importDefault(require("./Orders/routes/order.routes"));
const jwt_routes_1 = __importDefault(require("./jwt/routes/jwt.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_config_1 = __importDefault(require("./config/db.config"));
const jwt_controller_1 = require("./jwt/controller/jwt.controller");
const app = (0, express_1.default)();
const port = db_config_1.default.PORT;
const mongo_url = db_config_1.default.MONGODB_URL;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: false,
}));
(0, database_1.default)(mongo_url);
app.use(jwt_controller_1.jwtVerify);
app.use("/order", order_routes_1.default);
app.use("/jwt", jwt_routes_1.default);
app.post("/", () => {
    console.log("Hello World");
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map