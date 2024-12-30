import { Logger } from "tslog";
export const logger: Logger = new Logger({
    colorizePrettyLogs: true,
    type: 'pretty',
    displayDateTime: true,
    displayFilePath: 'hidden',
    displayFunctionName: false,
    displayInstanceName: true
});