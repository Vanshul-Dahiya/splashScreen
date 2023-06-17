import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: SplashComponent,
    path: ''
  },
  // {
  //   component: DetailComponentComponent,
  //   path: '/detail'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
