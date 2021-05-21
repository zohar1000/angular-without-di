import { appInjector } from '../global/app-injector';
import { LoggingService } from '../services/logging.service';
import { ErrorService } from '../services/error.service';

export abstract class BaseComponent {
  loggingService: LoggingService;
  errorService: ErrorService;

  constructor() {
    this.loggingService = appInjector.get(LoggingService);
    this.errorService = appInjector.get(ErrorService);
  }
}
