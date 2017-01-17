import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { UsersPage } from '../pages/users/users';
import { HomePage } from '../pages/home/home';
// import { ReposPage } from '../pages/repos/repos';
// import { OrganisationsPage } from '../pages/organisations/organisations';

// add the GitHub providers
import { API } from './../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, API]
})
export class AppModule {}
