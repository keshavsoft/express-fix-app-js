// v2/AppJs/index.js
import fixAnyJs from "express-fix-any-js";
import checkLines from "./checkLines.json" with {type: "json"};
import alterFile from "./common/AlterFile/index.js";

const alterLines = ({ inCheckLines, inStartEndPoint }) => {
    inCheckLines.importLines.toInsertLine = inCheckLines.importLines.toInsertLine.replaceAll("<startEndPoint>", inStartEndPoint);
};

const updateAppJs = ({ inJsFilePath, inCheckLines, inStartEndPoint = "Api",
    showLog = false }) => {

    let localCheckLines = inCheckLines || checkLines;

    alterLines({ inCheckLines: localCheckLines, inStartEndPoint });

    fixAnyJs({
        showLog,
        jsFilePath: inJsFilePath,
        inCheckLines: localCheckLines
    });

    return false;
};

export default updateAppJs;