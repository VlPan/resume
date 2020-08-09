import { InfoComponent } from './../views/info/info.component';
import { SkillsComponent } from './../views/skills/skills.component';
import { ExperienceComponent } from './../views/experience/experience.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'info',
  },
  {
    path: 'info',
    component: InfoComponent,
    data: {animation: 'info'}
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: {animation: 'exp'}
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: {animation: 'skills'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
