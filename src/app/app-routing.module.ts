import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/covid', pathMatch: 'full' },
  { path: 'covid', component: CovidComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
