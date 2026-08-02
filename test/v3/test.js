import { fileURLToPath } from "url";
import path from 'path';

import index from "../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");

const startFunc = async () => {
    await index({
        showLog: true,
        jsFilePath: appJsPath,
        inStartEndPoint: "api1"
    });
};

startFunc().then();