import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent {
  divContainers: any[] =[];

  constructor(private http: HttpClient , private router : Router) {
    // this.divContainers = [];
  }


  ngOnInit() {
    this.http.get<any>('assets/data.json')
      .subscribe(data => {
        this.divContainers = data; // Assuming the JSON data is an array
        console.log(data);
        
      });
  }

  navigateToDashboard(){
    this.router.navigate(['/dashboard'])
    
  }
  
}
