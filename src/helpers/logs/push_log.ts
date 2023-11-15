import { logger } from "../../config/logs/log_config"
import { getCurrentDateMoment } from "../date";


/**
 * Push a log to the log file with SIIPEV header
 * @param message message to push
 */
export const pushLog = (message: string) => {

    try {
        const header = 'SIIPEV - LOG ';
        const currentDate = getCurrentDateMoment();
        const messageWithHeader = `${header} ${currentDate} ${message}`;

        // Push log
        logger.info(messageWithHeader);


    } catch (error) {
        console.log(error);
    }

}