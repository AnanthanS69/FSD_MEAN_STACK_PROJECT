import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/backendapi.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  constructor(private api:BackendAPIService,private router:Router){}
  employees: any[] = [];
  ngOnInit(){
    this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
      console.log(this.employees);
    })
  }
}{

}
