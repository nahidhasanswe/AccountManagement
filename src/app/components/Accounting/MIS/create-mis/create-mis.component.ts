import { NotificationService } from './../../../../Services/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-mis',
  templateUrl: './create-mis.component.html',
  styleUrls: ['./create-mis.component.scss']
})
export class CreateMisComponent implements OnInit {

  public misForm;
  public isFormSubmitted: boolean = false;
  public isRequesting: boolean = false;

  constructor(private notify: NotificationService) { }

  ngOnInit() {
    this.intialForm();
  }

  intialForm() {
    this.misForm = new FormGroup({
      Name: new FormControl('', Validators.required)
    });
  }

  saveMIS(misData, isValid) {
    this.isFormSubmitted = true;
    if(isValid) {
      this.isRequesting = true;
      setTimeout(()=>{  
        this.isRequesting = false;
        this.notify.warn('Failed','Something wrong',5000);
      },3000);
    }
  }

  resetForm() {
    this.misForm.reset();
    this.isFormSubmitted = false;
  }

}
