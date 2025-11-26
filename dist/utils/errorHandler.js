"use strict";
//iggght lets handle errors...customly...
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
exports.handleError = handleError;
class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = "APIERROR!";
    }
}
exports.ApiError = ApiError;
//functions handles errors and logs them. tea.
function handleError(error) {
    if (error instanceof ApiError) {
        console.error(`Damn...API ERROR: ${error.message}`);
    }
    else if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
    }
    else {
        console.error("uhhhh lol idk unknown error occured");
    }
}
//That whole block is for errors. If the error is a instance of a APIError then load ApiError message and so on...
