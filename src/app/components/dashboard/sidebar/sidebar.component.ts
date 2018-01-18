import { Component, OnInit, Input} from '@angular/core';
import { ROUTES, MenuItems } from './side-bar.config';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public color: string;
  public menuItems: object = ROUTES;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;

  
  constructor() {
    this.activeFontColor = 'rgba(0,0,0,.6)';
    this.normalFontColor = 'rgba(0,0,0,.8)';
    this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';

  }

  ngOnInit() {
   
  }

}
