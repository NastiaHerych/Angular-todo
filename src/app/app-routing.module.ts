import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { StepsComponent } from './components/steps/steps.component';
import { FormComponent } from './components/form/form.component';
import { BlueSectionComponent } from './components/blue-section/blue-section.component';

const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'footer', component: FooterComponent },
  { path: 'blueSection', component: BlueSectionComponent },
  // { path: 'footer',  loadChildren: () => import('././components/footer/footer.component').then(i => i.FooterComponent)},
  { path: 'create', component: FormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
