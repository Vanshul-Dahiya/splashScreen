import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.css']
})
export class AttachmentComponent {

  constructor(private router : Router){}

  navigate(){
    this.router.navigate(['/calculation'])
  }

}
