import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
useForm: FormGroup = new FormGroup({});
submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
initializeForm(){
  this.useForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]]
  })
}
submitForm(){
  this.submitted = true;
  if(this.useForm.valid){
    console.log(this.useForm.value);
  }
}
}
