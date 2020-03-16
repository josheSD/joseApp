import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent,data:{depth:1}},
  {path: 'tutorial', component: TutorialComponent,data:{depth:2}},
  {path: 'portafolio', component: BriefcaseComponent,data:{depth:3}},
  {path: 'perfil', component: ProfileComponent,data:{depth:4}},
  {path: '**', component: NotFoundPageComponent,data:{depth:5}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
