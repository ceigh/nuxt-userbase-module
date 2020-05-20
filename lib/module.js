"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
const path_1 = __importDefault(require("path"));
const Userbase = function (options) {
    this.addPlugin({
        src: path_1.default.resolve(__dirname, 'plugin.js'),
        options
    });
};
exports.default = Userbase;
exports.meta = require('./package.json');
