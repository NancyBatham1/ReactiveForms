import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  name = new FormControl('');
  UpdateName(){
    this.name.setValue('Nancy');
  }
profileForm= new FormGroup({
  fname: new FormControl(''),
  lname: new FormControl('')
});

onSubmit(){
  console.log(this.profileForm.controls);
  console.log(this.profileForm.value);
  console.log(this.profileForm.value.fname);
}

  ngOnInit(): void {}
}
