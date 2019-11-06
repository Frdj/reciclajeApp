import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { InformationComponent } from './pages/information/information.component';
import { RecycleComponent } from './pages/recycle/recycle.component';
import { RetirarComponent } from './pages/retirar/retirar.component';
import { NewPublishComponent } from './pages/new-publish/new-publish.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DataPublishComponent } from './pages/new-publish/data-publish/data-publish.component';
import { AwardsComponent } from './pages/awards/awards.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'information', component: InformationComponent, canActivate: [AuthGuard] },
  { path: 'recycle', component: RecycleComponent, canActivate: [AuthGuard] },
  { path: 'ofrecer', component: NewPublishComponent, canActivate: [AuthGuard] },
  { path: 'awards', component: AwardsComponent, canActivate: [AuthGuard] },
  {
    path: 'dataPublish', component: DataPublishComponent, canActivate: [AuthGuard]
  },
  { path: 'retirar', component: RetirarComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'recycle', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
