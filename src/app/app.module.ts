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


export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpService(backend, defaultOptions);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    SaleComponent
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
  providers: [AuthService,AuthGuard, {
    provide: HttpService,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
