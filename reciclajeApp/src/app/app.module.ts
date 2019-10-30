import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
//Pages
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InformationComponent } from './pages/information/information.component';
import { RecycleComponent } from './pages/recycle/recycle.component';
import { RetirarComponent } from './pages/retirar/retirar.component';
import { OfrecerComponent } from './pages/ofrecer/ofrecer.component';
import { NewPublishComponent } from './pages/new-publish/new-publish.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialDetailComponent } from './pages/information/material-detail/material-detail.component';
import { SignupComponent } from './pages/signup/signup.component';
// components
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoPedidoComponent } from './components/nuevo-pedido/nuevo-pedido.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { RouterModule } from '@angular/router';
import { ImagenPipe } from './pipes/imagen.pipe';

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
    NuevoPedidoComponent,
    NewPublishComponent,
    LoadingComponent,
    SafeHtmlPipe,
    LoginComponent,
    SignupComponent,
    MaterialDetailComponent,
    ImagenPipe
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    // Material
    MatProgressSpinnerModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  entryComponents: [
    MaterialDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
