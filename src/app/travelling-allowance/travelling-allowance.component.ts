import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travelling-allowance',
  templateUrl: './travelling-allowance.component.html',
  styleUrls: ['./travelling-allowance.component.css']
})
export class TravellingAllowanceComponent {
  constructor(private router : Router){}

  navigate(){
    this.router.navigate(['/attachment'])
  }
}
