import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const runSync = (options) => {
    const v = getLatestVersion();

    const mod = require(`./bin/${v}/start.js`);

    return mod.default(options);
};

const load = async ({ jsFilePath, showLog, inStartEndPoint }) => {
    const v = getLatestVersion();

    const module = await import(`./bin/${v}/start.js`);

    await module.default({ jsFilePath, showLog, inStartEndPoint });
};

export { runSync };
export default load;