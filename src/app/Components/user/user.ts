import { Component, signal } from '@angular/core';
import {product,GetdetailsService} from'testing-lib'
@Component({
  selector: 'app-user',
  standalone:true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 constructor(private userService:GetdetailsService){}
 getdetail=signal<product[]|undefined>(undefined)
 ngOnInit()
 {
  this.userService.getDetails().subscribe((data)=>{
    this.getdetail.set(data.products)
  })
 }
}
