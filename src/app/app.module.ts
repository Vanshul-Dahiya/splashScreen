import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { TableComponent } from './table/table.component'
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InspectionPageComponent } from './inspection-page/inspection-page.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { PendingListPageComponent } from './pending-list-page/pending-list-page.component';
import { TravellingAllowanceComponent } from './travelling-allowance/travelling-allowance.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { ClaimCalculationComponent } from './claim-calculation/claim-calculation.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LoginComponent,
    DetailComponentComponent,
    TableComponent,
    ListComponent,
    SidenavComponent,
    InspectionPageComponent,
    GeneralInfoComponent,
    ClaimFormComponent,
    ReportPageComponent,
    PendingListPageComponent,
    TravellingAllowanceComponent,
    AttachmentComponent,
    ClaimCalculationComponent,
    BottomBarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
