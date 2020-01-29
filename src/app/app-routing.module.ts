import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tutorial', component: TutorialComponent},
  {path: 'portafolio', component: BriefcaseComponent},
  {path: 'perfil', component: ProfileComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
