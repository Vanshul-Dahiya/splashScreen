import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { InspectionPageComponent } from './inspection-page/inspection-page.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { PendingListPageComponent } from './pending-list-page/pending-list-page.component';
import { TravellingAllowanceComponent } from './travelling-allowance/travelling-allowance.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { ClaimCalculationComponent } from './claim-calculation/claim-calculation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: InspectionPageComponent,
    path: 'inspectionDashboard'
  },
  {
    component: DashboardComponent,
    path: 'Dashboard'
  },
  {
    component: SplashComponent,
    path: ''
  },
  {
    component: DetailComponentComponent,
    path: 'detail'
  },
  {
    component: ListComponent,
    path: 'list'
  },
  {
    component: ClaimFormComponent,
    path: 'claimForm'
  },
  { path: 'table/:id', component: TableComponent },
  { path: 'generalInfo', component: GeneralInfoComponent },
  { path: 'report', component: ReportPageComponent },
  { path: 'pending', component: PendingListPageComponent },
  { path: 'travelingAllowance', component: TravellingAllowanceComponent },
  { path: 'attachment', component: AttachmentComponent },
  { path: 'calculation', component: ClaimCalculationComponent },
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
