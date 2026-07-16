import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async ({ jsFilePath, showLog, inStartEndPoint }) => {
    const v = getLatestVersion();

    const module = await import(`./bin/${v}/start.js`);

    await module.default({ jsFilePath, showLog, inStartEndPoint });
};

export default load;