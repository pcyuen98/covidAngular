import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { SpaComponent } from './spa/spa.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'covid', component: CovidComponent },
  { path: 'home', component: HomeComponent },
  { path: 'spa', component: SpaComponent },
  { path: 'hello', component: HelloComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
