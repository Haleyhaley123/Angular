import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  public x = true;
  public name = new FormControl('');
  public profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor(){ }
  public UpdateName(){
    console.log(this.name.value);
    this.name.setValue('Hà Lê');
  }
  public onSubmit(){
    console.log('onSubmit()');
    console.log(this.profileForm.value);
    console.log('firstname =', this.profileForm.controls.firstName.value);
    console.log('lastname= ', this.profileForm.controls.lastName.value);
  }
  
}
