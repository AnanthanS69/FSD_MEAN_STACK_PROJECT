import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeformComponent } from './pages/employeeform/employeeform.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';

import { HTTP_INTERCEPTORS, HttpClient,HttpEvent,HttpHandler, HttpClientModule} from '@angular/common/http';
import { GetemployeedataService } from './getemployeedata.service';

import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { EditformComponent } from './pages/editform/editform.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { AuthService } from './auth.service';
import { BackendAPIService } from './backendapi.service';
import { TokeninterceptorService } from './tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeformComponent,
    HeaderComponent,
    ListComponent,
    FooterComponent,
    LoginComponent,
    EditformComponent,
    AdminHomeComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetemployeedataService,
              AuthService,
              BackendAPIService,
    {
      provide:HTTP_INTERCEPTORS,
              useClass:TokeninterceptorService,
              multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
