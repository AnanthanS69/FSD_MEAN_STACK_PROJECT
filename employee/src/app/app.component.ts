import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  todos:any
  constructor(private api:ApiService){}
  
  ngOnInit():void{
    this.api.getData().subscribe((res: any)=>{
      this.todos = res.data
    })

  }

}
