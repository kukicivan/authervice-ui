import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberProfileComponent } from "./member-profile/member-profile.component";
import { CompanyProfileComponent } from "./company-profile/company-profile.component";
import { AuthFormComponent } from "./auth-form/auth-form.component";
import { MemberDashboardComponent } from "./member-dashboard/member-dashboard.component";
import { CreateTeamComponent } from "./create-team/create-team.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthGuard } from "./auth.guard";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ContractComponent } from "./contract/contract.component";

const routes: Routes = [

  {path: '', component: MemberDashboardComponent, canActivate: [AuthGuard]},

  {path: 'login', component: AuthFormComponent, canActivate: []},
  {path: 'logout', component: LogoutComponent, canActivate: []},
  {path: 'register', component: RegisterComponent, canActivate: []},
  {path: 'forgot-password', component: ForgotPasswordComponent, canActivate: []},

  {path: 'company-profile', component: CompanyProfileComponent, canActivate: [AuthGuard]},

  {path: 'contract', component: ContractComponent, canActivate: [AuthGuard]},
  {path: 'create-team', component: CreateTeamComponent, canActivate: [AuthGuard]},

  {path: 'member-dashboard', component: MemberDashboardComponent, canActivate: [AuthGuard]},
  {path: 'member-profile', component: MemberProfileComponent, canActivate: [AuthGuard]},
  {path: 'member-profile/:id', component: MemberProfileComponent, canActivate: [AuthGuard]},

  {path: '**', redirectTo: 'member-dashboard', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
