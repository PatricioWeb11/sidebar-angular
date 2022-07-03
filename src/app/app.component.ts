import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth: number,
  collapsed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidebar';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle){
    this.isSideNavCollapsed =  data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
