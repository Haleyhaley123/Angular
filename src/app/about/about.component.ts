import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // public name ='Hà';
  // public age;
  // public vehicles = ['Toyota', 'Honda','Yamaha'];
  //public forms = '';
  //public version = '';
  public count = null;
  public Datas = null; 
  public id ='';
  constructor(
    private comon:CommonService,
    private serverHttp: ServerHttpService
    ){
    
  }
  ngOnInit(): void{
    this.serverHttp.getProfile().subscribe((data => {
      console.log(data);
      console.log(data.Datas);
      this.Datas = data.Datas;
      this.count = data.Datas.length;
      
      // for(var index in this.Datas)
      //   { 
      //     this.id = this.Datas
      //       console.log('Value =' ,this.Datas[index]);  // output: Apple Orange Banana
      //   }
      //this.forms = data;
     // this.version = data.Datas.Version;

    }));
    //post
    // this.serverHttp.addPosts().subscribe((data => {
    //   console.log(data);
    //   console.log(data.Datas);
      

    // }));
  }
  public addPosts(){
    this.serverHttp.addPosts().subscribe((data)=>{
console.log(data);
    });
  }


  // ngOnInit() void:{
  //   this.serverHttp.getProfile().subscribe(data)=>{
  //     console.log(data);
  //   }
  // }




  // public tangtuoi(){
  //   this.comon.age++;
  //   this.age = this.comon.age;
  // }

}
