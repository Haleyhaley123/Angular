import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //thuộc tính
  public name = 'Hà';
  public age;
  public vehicles = ['Toyota', 'Honda','Yamaha'];
constructor(private common:CommonService){
  this.age = this.common.age;
}
//function
ngOnInit(): void{}
public tangtuoi(){
  this.common.age++;
  this.age = this.common.age;
  // if(this.age === 20){
  //   this.name = "Đây là tuổi của Hà"
  // }else{
  //   this.name = "Đây là tuổi của ai đó";
  // }
  this.vehicles.push(this.name + ': ' + this.age);
}
}

