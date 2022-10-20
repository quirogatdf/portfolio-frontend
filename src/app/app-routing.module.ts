import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserAccessGuard } from './guards/user-access.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent, canActivate:[UserAccessGuard]},
  { path: 'login', component:LoginComponent},
  { path: '**', redirectTo:'', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
