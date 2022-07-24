import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "home-page", component: HomePageComponent}, 
  {path: "projects", component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent]
