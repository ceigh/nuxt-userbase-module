"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _opts = { appId: '<%= options.appId %>' };
const userbase = () => {
    return {
        init({ appId } = _opts) {
            console.log(appId);
        }
    };
};
const plugin = (context) => {
    context.$userbase = userbase();
};
exports.default = plugin;
