import { Component, signal } from '@angular/core';
import { ProductDetailsService,productDetails } from 'testing-lib';
console.log("myservice",ProductDetailsService)
@Component({
  selector: 'app-prod-detail',
  standalone:true,
  imports: [],
  templateUrl: './prod-detail.html',
  styleUrl: './prod-detail.css',
})
export class ProdDetail {
  constructor(private productService:ProductDetailsService){}
  details=signal<productDetails|undefined>(undefined)
  ngOnInit()
  {
    this.productService.productsDetails(1).subscribe((data:productDetails)=>{
     this.details.set(data)
    })
  }
}
