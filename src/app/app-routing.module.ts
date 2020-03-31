import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent,data:{depth:1,titulo:'Bienvenido',title:'José Chutas Ramos',keywords:'Tutorial, Portafolio, Perfil',description:'Home ,José Chutas Ramos',slug:'home'}},
  {path: 'tutorial', component: TutorialComponent,data:{depth:2,titulo:'Tutorial',title:'Tutorial | José Chutas Ramos',keywords:'Tutorial, José Chutas Ramos',description:'José Chutas Ramos',slug:'tutorial'}},
  {path: 'portafolio', component: BriefcaseComponent,data:{depth:3,titulo:'Portafolio',title:'Portafolio | José Chutas Ramos',keywords:'Portafolio, José Chutas Ramos',description:'José Chutas Ramos',slug:'portafolio'}},
  {path: 'perfil', component: ProfileComponent,data:{depth:4,titulo:'Perfil',title:'Perfil | José Chutas Ramos',keywords:'Perfil, José Chutas Ramos',description:'José Chutas Ramos',slug:'perfil'}},
  {path: '**', component: NotFoundPageComponent,data:{depth:5,titulo:'404 Not Found',title:'José Chutas Ramos',keywords:'404, José Chutas Ramos',description:'José Chutas Ramos',slug:'404'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
