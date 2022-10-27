import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { StepsComponent } from './components/steps/steps.component';
import { FormComponent } from './components/form/form.component';
import { BlueSectionComponent } from './components/blue-section/blue-section.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OnCreatedComponent } from './components/on-created/on-created.component';
import { OnDeleteComponent } from './components/on-delete/on-delete.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent,  ...canActivate(redirectLoggedInToHome), },
  { path: 'sign-up', component: SignUpComponent,  ...canActivate(redirectLoggedInToHome), },
  { path: 'footer', component: FooterComponent },
  { path: 'blueSection', component: BlueSectionComponent },
  { path: 'create', component: FormComponent },
  { path: 'dashboard', component: DashboardComponent,  ...canActivate(redirectUnauthorizedToLogin), },
  { path: 'created', component: OnCreatedComponent },
  { path: 'deleted', component: OnDeleteComponent },
  { path: 'update/:id', component: UpdatePageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
