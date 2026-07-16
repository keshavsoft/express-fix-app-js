// v2/AppJs/index.js
import fixAnyJs from "express-fix-any-js";
import checkLines from "./checkLines.json" with {type: "json"};
import alterFile from "./common/AlterFile/index.js";

const alterLines = ({ inStartEndPoint }) => {
    let localCheckLines = checkLines;

    localCheckLines.importLines.toInsertLine = localCheckLines.importLines.toInsertLine.replaceAll("<startEndPoint>", inStartEndPoint);
    localCheckLines.importLines.duplicationCheck = localCheckLines.importLines.duplicationCheck.replaceAll("<startEndPoint>", inStartEndPoint).replaceAll("'", '"');

    localCheckLines.useLines.toInsertLine = localCheckLines.useLines.toInsertLine.replaceAll("<startEndPoint>", inStartEndPoint);
    localCheckLines.useLines.duplicationCheck = localCheckLines.useLines.duplicationCheck.replaceAll("<startEndPoint>", inStartEndPoint).replaceAll("'", '"');

    return localCheckLines;
};

const updateAppJs = ({ inJsFilePath, inStartEndPoint, showLog = false }) => {

    let localCheckLines = alterLines({ inStartEndPoint });

    const fromFixAnyJs = fixAnyJs({
        showLog,
        jsFilePath: inJsFilePath,
        inCheckLines: localCheckLines
    });

    return fromFixAnyJs;
};

export default updateAppJs;