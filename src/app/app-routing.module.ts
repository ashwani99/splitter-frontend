import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthGuard } from "./core/guards/auth-guard.guard";
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app', 
    component: DashboardComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'friends', component: FriendsComponent },
      { path: 'groups', component: GroupsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
