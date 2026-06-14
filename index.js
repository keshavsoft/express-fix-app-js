import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async ({ jsFilePath, inCheckLines, showLog, inStartEndPoint }) => {
    const v = getLatestVersion();

    const module = await import(`./bin/${v}/start.js`);

    await module.default({ jsFilePath, inCheckLines, showLog, inStartEndPoint });
};

export default load;