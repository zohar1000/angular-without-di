import { Component } from '@angular/core';
import { errorService, loggingService } from '../../shared/global/global-services';

@Component({
  selector: 'app-direct-import',
  template: `
<div>
  <div>Direct Import</div><br/>
  <div>Logging Service ID: {{loggingService.id}}</div>
  <div>Error Service ID: {{errorService.id}}</div>
</div>
  `
})
export class DirectImportComponent {
  loggingService = loggingService;
  errorService = errorService;
}
