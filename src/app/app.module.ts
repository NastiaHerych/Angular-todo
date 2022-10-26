import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { MonoFopComponent } from './components/mono-fop/mono-fop.component';
import { HeaderCommonComponent } from './components/header-common/header-common.component';
import { HeaderAdditionalComponent } from './components/header-additional/header-additional.component';
import { BannerComponent } from './components/banner/banner.component';
import { AccountantComponent } from './components/accountant/accountant.component';
import { StepsComponent } from './components/steps/steps.component';
import { TariffsComponent } from './components/tariffs/tariffs.component';
import { GetCardComponent } from './components/get-card/get-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlueSectionComponent } from './components/blue-section/blue-section.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OnDeleteComponent } from './components/on-delete/on-delete.component';
import { OnCreatedComponent } from './components/on-created/on-created.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';  

const firebaseConfig = {
  apiKey: 'AIzaSyBmMYFVx_XFDtlKlCwagC1WJTZC6SWQGfE',
  authDomain: 'test-crud-angular-13419.firebaseapp.com',
  projectId: 'test-crud-angular-13419',
  storageBucket: 'test-crud-angular-13419.appspot.com',
  messagingSenderId: '634571379986',
  appId: '1:634571379986:web:2bd6a98c23a7060ff28fcb',
};

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    MonoFopComponent,
    HeaderCommonComponent,
    HeaderAdditionalComponent,
    BannerComponent,
    AccountantComponent,
    StepsComponent,
    TariffsComponent,
    GetCardComponent,
    FooterComponent,
    InputsComponent,
    ButtonsComponent,
    LanguageSelectorComponent,
    PipesComponent,
    FormComponent,
    BlueSectionComponent,
    DashboardComponent,
    OnDeleteComponent,
    OnCreatedComponent,
    UpdatePageComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
