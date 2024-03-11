const FileSystem = require("fs");

function logReqRes(_filename) {
    return (req, res, next) => {
        FileSystem.appendFile(
            _filename,
            `\n${Date.now()}:${req.ip}:${req.method}:${req.path}`,
            (err) => {
                if (err) {
                    console.error(err);
                }
            }
        );
        next();
    };
}

module.exports = logReqRes;