import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {
data:any[]=[]

  constructor(private apiService:ApiService){}


  ngOnInit(): void {
    this.llenarData()
  }

  llenarData(){
    this.apiService.getData().subscribe(data =>{
      this.data=data;
      console.log(this.data);
    })
     
  }

}
