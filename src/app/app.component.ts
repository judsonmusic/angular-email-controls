import { Component, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.editForm = this.formBuilder.group({
      name: new FormControl(null),
      emails: new FormArray([])
    })
  }

  save(){
    console.log(this.editForm.value);
  }
}
