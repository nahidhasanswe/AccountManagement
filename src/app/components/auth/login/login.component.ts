import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, Validator } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { CustomValidators } from 'ng2-validation';

import { ToastyService, ToastyConfig } from 'ng2-toasty';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  page = 'signin';
  public loginForm;
  public forgotPasswordForm;
  public registrationForm;
  public isLogin = false;

  public loginButton = 'Sign In';

  constructor(private authService: AuthService,private route: Router,
              private toast: ToastyService, private toastyConfig: ToastyConfig) {
                this.toastyConfig.theme = 'default';

      if(authService.checkLogged()) {
        route.navigate(['/home'])
      }
  }

  ngOnInit() {
    this.InitialLoginForm();
    this.InitialRegistrationForm();
    this.InitialForgotPasswordForm();
  }

  pageChange(pageName) {
    this.page = pageName;
  }

  InitialLoginForm() {
    this.loginForm = new FormGroup({
      UserName : new FormControl('', Validators.required),
      Password : new FormControl('', Validators.required),
    });
  }

  InitialRegistrationForm() {
    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

    this.registrationForm = new FormGroup({
      Name : new FormControl('', Validators.required),
      Email : new FormControl('', [Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]),
      Password : password,
      ConfirmPassword : confirmPassword
    });
  }

  InitialForgotPasswordForm() {
    this.forgotPasswordForm = new FormGroup({
      Email : new FormControl('', [Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')])
    });
  }

  UserLogin(formdata, isValid) {
    if (isValid) {
      // this.authService.login(formdata).subscribe(response => {
      //   alert('Login Successfully');
      // }, error => {
      //   console.log('Email or password is incorrect');
      // });

      if (formdata.UserName === 'admin' && formdata.Password === '123456') {
          this.toast.success({timeout: 3000, title: 'Login Successful', msg: 'Welcome to dashboard' });
          this.authService.setToken();
          this.route.navigate(['/accounting/mis/chart-of-accounting']);
      }else {
        this.toast.error({timeout: 3000, title: 'Login Failed', msg: 'Email or password is incorrect' });
      }
    }
  }

  UserRegistration(formdata, isValid) {
    if (isValid) {
      this.authService.registration(formdata).subscribe(response => {
        alert('Registration Successfully');
      }, error => {
        console.log('Email is already used');
      });
    }
  }

  ForgotPassword (formdata, isValid) {
    if (isValid) {
      this.authService.registration(formdata).subscribe(response => {
        alert('Reset password link sent');
      }, error => {
        console.log('Email is not exist');
      });
    }
  }
}
