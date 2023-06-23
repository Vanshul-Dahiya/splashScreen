import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-calculation',
  templateUrl: './claim-calculation.component.html',
  styleUrls: ['./claim-calculation.component.css']
})
export class ClaimCalculationComponent {
  constructor(private router : Router){}

  navigate(){
    this.router.navigate(['/list'])
  }
}
