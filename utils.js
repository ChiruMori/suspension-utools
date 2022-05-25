const fs = require("fs");

const constants = {
    debug: true,
    devTool: false,
    logFile: "C:/Users/cxlm/moyu/suspension-utools/debug.log",
    defaultWidth: 300,
    defaultHeight: 200,
};

/**
 * log 内容到日志文件中，方便调试，非调试模式无效果
 *
 * @param  {...any} args 需要 log 的信息
 */
const fileLog = (...args) => {
    if (!constants.debug) {
        return;
    }
    let date = new Date().toLocaleString();
    let toLog = JSON.stringify(args.length === 1 ? args[0] : args);
    fs.writeFileSync(constants.logFile, `[${date}] ${toLog}\n`, { flag: "a+" });
};

exports.config = constants;

exports.log = fileLog;
