import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  showLayout:boolean=true;
  ismenuopened:boolean=true;

  constructor(private router: Router){
    this.router.events.forEach((event: any) => {

      if (event instanceof NavigationEnd) {
        if (event['url'] == '/' || event['url'] == '/login')
          this.showLayout = false;
        else
          this.showLayout = true;
      }

    });
  }

  menuChangeEvent(event:any){
  this.ismenuopened=event;
  // console.log(event);
  
  }
}
