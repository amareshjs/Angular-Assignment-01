import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
    },
    {
      path:'unauth',
      component:NoAccessComponent
      },
      {
        // path:'**',
        // component:PageNotFoundComponent
        },

    
];


@NgModule({
  declarations: [
    LoginComponent,
    PageNotFoundComponent,
    NoAccessComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
