import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) {}
  name = new FormControl('');
  myForm : FormGroup|any;
  UpdateName(){
    this.name.setValue('Nancy');
  }
profileForm= new FormGroup({
  fname: new FormControl('', Validators.required),
  lname: new FormControl('',  Validators.required)
});


onSubmit(){
  console.log(this.profileForm.controls);
  console.log(this.profileForm.value);
  console.log(this.profileForm.value.fname);
}  

onSubmitD(){
  console.log(this.myForm.controls);
  console.log(this.myForm.value);
}  


ngOnInit() {
  
  this.myForm = this.formBuilder.group({
    fields: this.formBuilder.array([])
    
  });
  const field = this.formBuilder.group({
    fieldName: [''],
    fieldDescription: [''],
    // Add other fields as needed
  });

  this.fieldForms.push(field);
}

get fieldForms() {
  return this.myForm.get('fields') as FormArray;
}

addField() {
  const field = this.formBuilder.group({
    fieldName: [''],
    fieldDescription: [''],
    // Add other fields as needed
  });

  this.fieldForms.push(field);
}

removeField(index: number) {
  this.fieldForms.removeAt(index);
}
}
