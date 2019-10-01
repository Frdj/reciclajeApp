import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from './pages/profile/profile.component';
import { InformationComponent } from './pages/information/information.component';
import { RecycleComponent } from './pages/recycle/recycle.component';
import {MatDividerModule} from '@angular/material/divider';
import { RetirarComponent } from './pages/retirar/retirar.component';
import { OfrecerComponent } from './pages/ofrecer/ofrecer.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    InformationComponent,
    RecycleComponent,
    RetirarComponent,
    OfrecerComponent,
    SolicitudComponent,
  ],
  imports: [
    MatButtonModule,
    MatDividerModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
