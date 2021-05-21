# Angular Without Dependency Injection

This project demonstrates the use of singleton service in components without using dependency injection.
<br/><br/>

### Services
There are 2 services, <b>LoggingService</b> and <b>ErrorService</b>.<br/>
Each service generates a random id upon initialization, this id will be displayed in the components as an indication that the singleton service is available in the component.
<br/><br/>

### Saving reference to the singleton services
The references will be saved in global variables in shared/global/global.services.ts.<br/>
Saving is made in the AppModule constructor.<br/>
In addition, the AppModule injector will be saved in shared/global/app.injector.ts, the app injector will be used by BaseComponent to get the singleton services reference. 
<br/><br/>

### components
there are 2 kinds of components:
* those which directly import the services from the global variables
* those which extends BaseComponent.
  <br/>BaseComponent holds members for logging service and error service, they are initialized by extracting the signleton references from the global app injector

