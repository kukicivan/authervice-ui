import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from "@angular/material/dialog";
import { AuthFormComponent } from './auth-form/auth-form.component';
import { RegisterComponent } from './register/register.component';
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { AuthenticationService } from "./shared-library/services/authentication.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MatDividerModule } from "@angular/material/divider";
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { CreateTeamComponent } from './create-team/create-team.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContractComponent } from './contract/contract.component';
import { AuthenticationInterceptor } from "./shared-library/interceptors/authentication-interceptor.service";
import { AvatarModule } from "ngx-avatar";
import { MatTableModule } from "@angular/material/table";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthFormComponent,
    RegisterComponent,
    MemberProfileComponent,
    CompanyProfileComponent,
    MemberDashboardComponent,
    CreateTeamComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    ContractComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    // Specify AvatarModule as an import
    AvatarModule,
    MatTableModule
  ],
  providers: [
    AuthenticationService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
