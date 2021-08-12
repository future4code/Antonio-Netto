"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.get("/countries/:id", (req, res) => {
    const result = data_1.countries.find((country) => { return country.id === Number(req.params.id); });
    res.send(result);
});
app.get("/countries", (req, res) => {
    res.send(data_1.countries);
});
app.listen(3003, () => {
    console.log("Servidor pronto!");
});
//# sourceMappingURL=index.js.map