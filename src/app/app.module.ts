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
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
