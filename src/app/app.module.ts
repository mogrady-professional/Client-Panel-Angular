import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SettingsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment),
    FlashMessagesModule.forRoot(),
  ],
  providers: [AngularFireAuth, AuthService, SettingsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
