import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InformationComponent } from './pages/information/information.component';
import { RecycleComponent } from './pages/recycle/recycle.component';
import { OfrecerComponent } from './pages/ofrecer/ofrecer.component';
import { RetirarComponent } from './pages/retirar/retirar.component';
import { NewPublishComponent } from './pages/new-publish/new-publish.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'information', component: InformationComponent },
  { path: 'recycle', component: RecycleComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'ofrecer', component: NewPublishComponent },
  { path: 'retirar', component: RetirarComponent },
  { path: '**', redirectTo: 'recycle', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
