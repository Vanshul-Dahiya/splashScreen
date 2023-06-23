import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
const tinycolor = require('tinycolor2');


@Component({
  selector: 'app-inspection-page',
  templateUrl: './inspection-page.component.html',
  styleUrls: ['./inspection-page.component.css']
})
export class InspectionPageComponent {
  gridConfig :any[]=[];
  getColor(index : number): string {
    const baseColor = '#DB4747' ; 
    const colorVariant = tinycolor(baseColor).lighten(index * 5).toString();
    console.log( " colorV ->  "  , colorVariant)
    return colorVariant;
  }
  
  constructor(private router : Router,private http: HttpClient){}
  ngOnInit() {
    this.http.get<any>('assets/dashboard_data.json')
      .subscribe(data => {
        this.gridConfig = data;
        // console.log(data);
        
        console.log(this.gridConfig);
      });
  }
  
  // openTable(itemId: number) {
  //   this.router.navigate(['/table', itemId]);
  // }
  openPage(itemId: number) {
    switch (itemId) {
      case 1:
        this.router.navigate(['/generalInfo']);
        break;
      case 2:
        this.router.navigate(['/table',itemId]);
        break;
      case 3:
        this.router.navigate(['/table2',itemId]);
        break;
      default:
        // Handle other item IDs
        break;
    }
  }
  
  
}
