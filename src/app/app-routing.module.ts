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

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'footer', component: FooterComponent },
  { path: 'blueSection', component: BlueSectionComponent },
  { path: 'create', component: FormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'created', component: OnCreatedComponent },
  { path: 'deleted', component: OnDeleteComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
