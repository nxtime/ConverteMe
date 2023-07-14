"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenValidation = (_req, res, next) => {
    try {
        return next();
    }
    catch (error) {
        res.status(401).send({ message: error.message });
    }
};
exports.default = tokenValidation;
