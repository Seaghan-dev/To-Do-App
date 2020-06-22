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
*/
