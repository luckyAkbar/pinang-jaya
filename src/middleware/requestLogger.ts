import dotenv from 'dotenv';

import fs from 'fs';
import path from 'path';
import { Request } from 'express';
import morgan from 'morgan';
import ServerConfigError from '../class/ServerConfigError';

dotenv.config();

const getRequestLogPath = (): string => {
  const requestLogPath: string | undefined = process.env.REQUEST_LOG_PATH;

  if (requestLogPath === undefined) throw new ServerConfigError('REQUEST_LOG_PATH is undefined. Please specify one in your .env file');

  return requestLogPath;
};

const requestLogger = morgan('short', {
  stream: fs.createWriteStream(path.join(getRequestLogPath(), 'request.log'), {
    flags: 'a',
  }),
  skip(req: Request): boolean {
    const { path } = req;
    const skippedReqLoggingRoutes: string[] | undefined = process.env.SKIPPED_REQ_LOGGING_PATHS?.split(',');

    if (skippedReqLoggingRoutes === undefined) return false;
    return (skippedReqLoggingRoutes.includes(path));
  },
});

export default requestLogger;
