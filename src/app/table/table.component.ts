import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CameraResultType , CameraSource }  from '@capacitor/camera';


export interface PeriodicElement {
  course: string;
  checkbox: boolean;
  selectOption: string;
  image: any | undefined;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { course: 'B.Pharma', checkbox: false, selectOption: '',image: undefined},
  { course: 'M.Phil', checkbox: false, selectOption: '',image: undefined},
  { course: 'M.Pharma', checkbox: false, selectOption: '',image: undefined},
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

async openCamera(index : number) {
  const { Camera } = Plugins ;

  const image = await Camera['getPhoto']({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Base64,
    source: CameraSource.Camera,
  });

  this.dataSource[index].image = image.base64String;
  // Process the captured image or save it to your desired location
  console.log('Captured image:', image);
}

updateCheckboxValue(event: Event, index: number) {
  const target = event.target as HTMLInputElement;
  this.dataSource[index].checkbox = target.checked;
  // this.dataSource[index].checkbox = checked;
}


submitTableData(){
  localStorage.setItem('tableData', JSON.stringify(this.dataSource));
}
getTableData(){
  const storedData= 
  localStorage.getItem('tableData');
  if(storedData){
   const retrievedData = JSON.parse(storedData)
   this.dataSource=retrievedData;
   console.log(storedData);
   
  }
}



}

