import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BriefcaseComponent,
    HomeComponent,
    NotFoundPageComponent,
    ProfileComponent,
    TutorialComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
