import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router : Router){}
  navigate(itemId: number){
    // this.router.navigate(['/detail'])
      switch (itemId) {
        case 1:
          this.router.navigate(['/detail']);
          break;
        case 2:
          this.router.navigate(['/report']);
          break;
        case 3:
          this.router.navigate(['/pending']);
          break;
        case 4:
          this.router.navigate(['/claimForm']);
          break;
        default:
          // Handle other item IDs
          break;
      }
  }
}
