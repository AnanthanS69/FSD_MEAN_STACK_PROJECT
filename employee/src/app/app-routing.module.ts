import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './pages/employeeform/employeeform.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { AddformComponent } from './pages/addform/addform.component';;
import { EditformComponent } from './pages/editform/editform.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:AdminHomeComponent},
  {path:"employeeform",component:EmployeeformComponent},
  {path:"edit/:id",component:EditformComponent},
  {path:"user",component:UserhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
