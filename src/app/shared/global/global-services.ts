import { ErrorService } from '../services/error.service';
import { LoggingService } from '../services/logging.service';

export let loggingService: LoggingService = null;
export let errorService: ErrorService = null;

export const setLoggingService = service => loggingService = service;
export const setErrorService = service => errorService = service;
