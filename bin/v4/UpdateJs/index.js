import bothLines from './bothLines/test.js';

const fileType = "fromAppJs";

const startFunc = ({ jsFilePath, inStartEndPoint }) => {
    bothLines({
        inFolderNameToInsert: inStartEndPoint,
        inFileType: fileType, inJsPath: jsFilePath
    });

};

export default startFunc;