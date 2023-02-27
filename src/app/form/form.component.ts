import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public name = '';
  public password = '';
  public vehicles = ['Toyota', 'Honda','Yamaha'];
  public vehicle = '';
  constructor(){}
  public onSubmit(){
    console.log('onSubmit');
    console.log('Name =', this.name);
    console.log('Password = ', this.password);
    console.log('Vehicle = ', this.vehicle);
  }

}
