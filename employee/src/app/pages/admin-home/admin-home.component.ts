import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/backendapi.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  constructor(private api:BackendAPIService,private router:Router){}
  employees: any[] = [];
  ngOnInit(){
    this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
      //console.log(this.employees);
    })
  }
  editForm(id:any){
    //console.log(id)
    this.router.navigate(["/edit/"+id]);
  }
  deleteForm(id:any){
      this.api.delete(id).subscribe((res:any)=>{console.log('Success')})
      this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
    })
  
}
}

