import { Component } from '@angular/core';

import {  inject } from '@angular/core'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

const tinycolor = require('tinycolor2');

// import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  // constructor(private router : Router){

  // }
  // navigateToDetailPage(cardId : number ) : void {
  //   this.router.navigate(['/detail',cardId])
  // }

  gridConfig :any[]=[];
  
constructor(private router: Router,private http: HttpClient) {}
getColor(index : number): string {
  const baseColor = '#DB4747' ; 
  const colorVariant = tinycolor(baseColor).lighten(index * 5).toString();
  console.log( " colorV ->  "  , colorVariant)
  return colorVariant;
}
ngOnInit() {
  this.http.get<any>('assets/dashboard_data.json')
    .subscribe(data => {
      this.gridConfig = data;
      // console.log(data);
      
      console.log(this.gridConfig);
    });
}

openTable(itemId: number) {
  this.router.navigate(['/table', itemId]);
}

  // private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { id: 1,title: 'filled', cols: 1, rows: 1,name:'General Information', color:'red'},
  //         { id: 2,title: 'filled', cols: 1, rows: 1 ,name:'Statutory Document ', color:'pink'},
  //         { id: 3,title: 'filled', cols: 1, rows: 1, name:'Faculty Details', color:'purple' },
  //         { id: 4,title: 'filled', cols: 1, rows: 1,name:'Infrastructure', color:'blue' },
  //         { id: 5,title: 'filled', cols: 1, rows: 1 ,name:'Equipments/Glassware/instrument', color:'green'},
  //         { id: 6,title: 'filled', cols: 1, rows: 1,name:'Library', color:'orange'},
          
  //       ];
  //     }

  //     return [
  //       { id: 1,title: 'filled', cols: 1, rows: 1,name:'General Information', color:'red'},
  //       { id: 2,title: 'filled', cols: 1, rows: 1 ,name:'Statutory Document ', color:'pink'},
  //       { id: 3,title: 'filled', cols: 1, rows: 1, name:'Faculty Details', color:'purple' },
  //       { id: 4,title: 'filled', cols: 1, rows: 1,name:'Infrastructure', color:'blue' },
  //       { id: 5,title: 'filled', cols: 1, rows: 1 ,name:'Equipments/Glassware/instrument', color:'green'},
  //       { id: 6,title: 'filled', cols: 1, rows: 1,name:'Library', color:'orange'},
          
        
  //     ];
  //   })
  // );

}
