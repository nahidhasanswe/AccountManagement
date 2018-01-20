import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';

import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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


const routes: Routes = [
  {path: '', redirectTo: '/accounting/mis/chart-of-accounting', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'', component: DashboardComponent, children: [
    //Accounting/MIS Routing
    {path: 'accounting/mis/chart-of-accounting', component: ChartOfAccountingComponent},
    {path: 'accounting/mis/create-mis', component: CreateMisComponent},
    
    //Accounting/Creations
    {path: 'accounting/creations/create-group', component: AddGroupComponent},
    {path: 'accounting/creations/create-ledger', component: LedgerComponent},

    //Accounting/Voucher
    {path: 'accounting/voucher/journal', component: JournalComponent},
    {path: 'accounting/voucher/payment', component: PaymentComponent},
    {path: 'accounting/voucher/receive', component: ReceiveComponent},

    //Accounting/Report
    {path: 'accounting/report/trial-balance', component: TrialBalanceComponent},
    {path: 'accounting/report/balance-sheet', component: BalanceSheetComponent},
    {path: 'accounting/report/ledger-book', component: LedgerBookComponent},
    {path: 'accounting/report/income-statement', component: IncomeStatmentComponent},
    {path: 'accounting/report/payment-receive-statement', component: PaymentReportComponent},

    //Accounting/Settings
    {path: 'accounting/settings/bank-info', component: BankInfoComponent},
    {path: 'accounting/mis/comapny', component: CompanyComponent},
    {path: 'accounting/mis/bank-account-type', component: BankAccTypeComponent}
  ]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
