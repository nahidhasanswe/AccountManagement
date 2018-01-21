import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig } from 'ng2-toasty';

@Injectable()
export class NotificationService {

    private timeOut : number = 3000;
  constructor(private toastService: ToastyService, private toastConfig: ToastyConfig) {
    this.toastConfig.theme = 'default';
   }

   success(title: string, text: string, timeout?: number) {
    this.toastService.success({timeout: timeout? timeout : this.timeOut, title: title, msg: text });
   }

   warn(title: string, text: string, timeout?: number) {
    this.toastService.warning({timeout: timeout? timeout : this.timeOut, title: title, msg: text });
   }

   error(title: string, text: string, timeout?: number) {
    this.toastService.error({timeout: timeout? timeout : this.timeOut, title: title, msg: text });
   }

   info(title: string, text: string, timeout?: number) {
    this.toastService.info({timeout: timeout? timeout : this.timeOut, title: title, msg: text });
   }
}
