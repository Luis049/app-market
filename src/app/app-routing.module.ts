import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './component/auth/sing-in/sing-in.component';
import { SingUpComponent } from './component/auth/sing-up/sing-up.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'singIn', component: SingInComponent },
  { path: 'singUp', component: SingUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
