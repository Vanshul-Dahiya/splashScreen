import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {  inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

const tinycolor = require('tinycolor2');



@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent {
  gridConfig: any[] =[];

  constructor(private http: HttpClient , private router : Router) {  }

  getColor(index : number): string {
    const baseColor = '#F4DC04'; // Replace with your desired base color
    const colorVariant = tinycolor(baseColor).lighten(index * 5).toString();
    console.log( " colorV ->  "  , colorVariant)
    return colorVariant;
  }

  ngOnInit() {
    this.http.get<any>('assets/data.json')
      .subscribe(data => {
        this.gridConfig = data;
        // console.log(data);
        
         // Assuming the JSON data is an array
        // console.log(this.gridConfig);
      });
  }

  navigateToDashboard(){
    this.router.navigate(['/inspectionDashboard'])
    
  }


  // private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  // getGridConfig(){
  // return this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { cols: 1, rows: 1 },
  //         {  cols: 1, rows: 1 },
  //         {  cols: 1, rows: 1 },
  //         {  cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       {  cols: 2, rows: 1 },
  //       {  cols: 1, rows: 1 },
  //       { cols: 1, rows: 2 },
  //       {  cols: 1, rows: 1 }
  //     ];
  //   })
  // );
  // }
  
}
