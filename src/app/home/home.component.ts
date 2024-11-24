import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { ReactiveFormsModule , FormBuilder , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , FormsModule , ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  //Component code goes here
  nameOld : string = "";
  items : string[] = [];
  registrationForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.items = this.dataService.getItems();

    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
}
  ngOnInit(): void {}
  get name() {
    return this.registrationForm.get('name');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }

onSubmit() : void {
  if(this.registrationForm.valid){
    console.log('Form submitted', this.registrationForm.value);
  } else {
    console.log('Form invalid');
  }
}

addItem(item: string) : void {
  if(item){
    this.dataService.addItem(item);
    this.items = this.dataService.getItems();
  }
}
}
