import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/*
//References
// https://codinglatte.com/posts/how-to/how-to-setup-firebase-for-angular/
// https://www.techiediaries.com/angular-firebase/angular-9-firebase-authentication-email-google-and-password/
// https://alligator.io/angular/firebase-authentication-angularfire2/
// https://github.com/angular/angularfire
// https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
// https://stackoverflow.com/questions/41500102/cleanest-way-to-reset-forms
// https://github.com/angular/angularfire/blob/master/docs/rtdb/lists.md
// https://github.com/angular/angularfire/blob/master/docs/auth/router-guards.md
// https://fireship.io/lessons/reactive-crud-app-with-angular-and-firebase-tutorial/
// https://angular.io/guide/router#setting-up-wildcard-routes
// https://angular.io/tutorial
// https://github.com/angular/angularfire/tree/master/docs
*/
