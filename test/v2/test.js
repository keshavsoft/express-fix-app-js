import index from "../../index.js";

const startFunc = async () => {
    await index({
        showLog: true,
        jsFilePath: process.cwd() + "/app.js",
        inStartEndPoint: "api"
    });
};

startFunc().then();