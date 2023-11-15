import DailyRotateFile from 'winston-daily-rotate-file';
import appRoot from 'app-root-path';


let expressWinston = require('express-winston');



const transport: DailyRotateFile = new DailyRotateFile({
    dirname: `${appRoot}/logs/`,
    filename: 'siipev-express-log-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    level: 'info',    
    handleExceptions: true,    
    json: false,
    maxSize: '20m',
    maxFiles: '24d',
    frequency: '1h',
});

transport.on('rotate', function (oldFilename, newFilename) {
    expressLogger.info('Log file switched from: ' + oldFilename + ' to: ' + newFilename);
});

/**
 * Create a log server for API REST Queries
 */
export const expressLogger = expressWinston.logger({
    transports: [
        transport
    ],
    exitOnError: false
});
