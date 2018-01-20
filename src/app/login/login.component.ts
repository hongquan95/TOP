import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';  //CAN THAN IMPORT TU DONG BI SAI

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  register = "";
  phrForm = new FormGroup(
    {
      userName: new FormControl(),
      dob: new FormControl(),
      gender: new FormControl()

    });
  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.phrForm.value);
  }

}
