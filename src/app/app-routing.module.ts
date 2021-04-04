import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes=[
  {path:'Dashbord',component:DashbordComponent},
  {path:'heroes',component:HeroComponent},
  { path: 'herodetail/:id', component: HeroDetailComponent },
  { path: '', component: DashbordComponent }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
