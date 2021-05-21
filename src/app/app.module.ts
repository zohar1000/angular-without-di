import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { setErrorService, setLoggingService } from './shared/global/global-services';
import { LoggingService } from './shared/services/logging.service';
import { ErrorService } from './shared/services/error.service';
import { setAppInjector } from './shared/global/app-injector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
    setLoggingService(injector.get(LoggingService));
    setErrorService(injector.get(ErrorService));
  }
}
