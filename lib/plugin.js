"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userbase_js_1 = __importDefault(require("userbase-js"));
const _opts = { appId: '<%= options.appId %>' };
const userbaseInit = () => {
    return {
        init(opts = _opts) {
            return userbase_js_1.default.init(opts);
        }
    };
};
const plugin = context => {
    context.$userbase = userbaseInit();
};
exports.default = plugin;
