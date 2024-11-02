# FrontendUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



Failure rate increase
The error rate increased to 12.84 %.

Service method /apigateway/health/Agent/GetRenewalCount has a failure rate increase.

Affected requests:
20 /min

Service method:
/apigateway/health/Agent/GetRenewalCount

RCA:
apigateway/health/Elevate/ElevateMasterData
502 - Bad Gateway
Caused by exception:
System.Net.Http.HttpRequestException

/health/api/Elevate/SaveEditQuoteV1

Exception: Microsoft.IdentityModel.Tokens.SecurityTokenExpiredException
message: An error occurred while sending the request.


