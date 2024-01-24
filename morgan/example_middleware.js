export function logger (req, res, next) {
    console.log("Request method: ", req.method);
    console.log("Request url: ", req.url);
    next();
};

export default {logger}