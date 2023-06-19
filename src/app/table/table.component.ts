import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { Plugins } from '@capacitor/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CameraResultType , CameraSource }  from '@capacitor/camera';


export interface PeriodicElement {
  course: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { course: 'B.Pharma'},
  { course: 'M.Pharma'},
  { course: 'M.Phil'},

];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  imageSrc: string | undefined;
form: FormGroup;
constructor(private route : ActivatedRoute){
  this.form = new FormGroup({
    image: new FormControl('')
  });

}

  // cardId: number;

// constructor(private route: ActivatedRoute) {}

// ngOnInit() {
  // this.cardId = +this.route.snapshot.paramMap.get('id');
  // Fetch data or perform operations based on the cardId
// }



displayedColumns: string[] = ['course', 'yesNo', 'ifYes', 'inspectorRemark'];
dataSource = ELEMENT_DATA;

async openCamera() {
  const { Camera } = Plugins;

  const image = await Camera['getPhoto']({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Base64,
    source: CameraSource.Camera,
  });

  // Process the captured image or save it to your desired location
  console.log('Captured image:', image);
}

}

