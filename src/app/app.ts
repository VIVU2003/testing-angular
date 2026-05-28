import { Component, signal } from '@angular/core';
// import {GetdetailsService} from 'testing-lib';
import { User } from './Components/user/user';
@Component({
  selector: 'app-root',
  imports:[User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testing-angular');
  // constructor(private getservice:GetdetailsService){};
  // getdata:any=signal([])
  //  ngOnInit(): void{
  //   this.getservice.getDetails().subscribe((data:any)=>{
  //    this.getdata.set(data.products)
  //   })
  //  }
  
  
}
