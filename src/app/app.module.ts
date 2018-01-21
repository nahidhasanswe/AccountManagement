import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastyModule } from 'ng2-toasty';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
  MatInputModule, 
  MatIconModule, 
  MatSelectModule
} from '@angular/material';
import { MatCardModule, MatGridListModule, MatButtonModule} from '@angular/material';
import { MatToolbarModule, MatTooltipModule, MatMenuModule} from '@angular/material';
import { MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule, MatSidenavModule, MatListModule} from '@angular/material';
import { CustomFormsModule } from 'ng2-validation';

import { AuthService } from './auth/auth.service';
import { HttpService } from './auth/http.service';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { SaleComponent } from './components/sale/sale.component';
import { AddGroupComponent } from './components/Accounting/Creations/Group/add-group.component';
import { LedgerComponent } from './components/Accounting/Creations/ledger/ledger.component';
import { ChartOfAccountingComponent } from './components/Accounting/MIS/chart-of-accounting/chart-of-accounting.component';
import { CreateMisComponent } from './components/Accounting/MIS/create-mis/create-mis.component';
import { BalanceSheetComponent } from './components/Accounting/Report/balance-sheet/balance-sheet.component';
import { IncomeStatmentComponent } from './components/Accounting/Report/income-statment/income-statment.component';
import { LedgerBookComponent } from './components/Accounting/Report/ledger-book/ledger-book.component';
import { PaymentReportComponent } from './components/Accounting/Report/payment-report/payment-report.component';
import { TrialBalanceComponent } from './components/Accounting/Report/trial-balance/trial-balance.component';
import { BankAccTypeComponent } from './components/Accounting/Settings/bank-acc-type/bank-acc-type.component';
import { BankInfoComponent } from './components/Accounting/Settings/bank-info/bank-info.component';
import { CompanyComponent } from './components/Accounting/Settings/company/company.component';
import { JournalComponent } from './components/Accounting/Voucher/journal/journal.component';
import { PaymentComponent } from './components/Accounting/Voucher/payment/payment.component';
import { ReceiveComponent } from './components/Accounting/Voucher/receive/receive.component';
import { NotificationService } from './Services/notification.service';


export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpService(backend, defaultOptions);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    SaleComponent,
    AddGroupComponent,
    LedgerComponent,
    ChartOfAccountingComponent,
    CreateMisComponent,
    BalanceSheetComponent,
    IncomeStatmentComponent,
    LedgerBookComponent,
    PaymentReportComponent,
    TrialBalanceComponent,
    BankAccTypeComponent,
    BankInfoComponent,
    CompanyComponent,
    JournalComponent,
    PaymentComponent,
    ReceiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    ToastyModule.forRoot(),
    ReactiveFormsModule, 
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    CustomFormsModule

  ],
  providers: [AuthService,AuthGuard,NotificationService, {
    provide: HttpService,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
