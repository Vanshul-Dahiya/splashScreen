import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.css']
})
export class ClaimFormComponent {

  constructor(private router : Router){}

  navigate(){
    this.router.navigate(['/travelingAllowance'])
  }
}
