import fixAnyJs from 'express-fix-any-js';

const fileType = "fromAppJs";

const startFunc = ({ jsFilePath, inStartEndPoint }) => {
  return fixAnyJs({
    jsFilePath,
    inFileType: "fromAppJs",
    inFolderNameToInsert: inStartEndPoint
  });

};

export default startFunc;