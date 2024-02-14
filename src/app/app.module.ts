// Importa solo lo necesario, no es necesario importar MainMenuComponent aquí
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { LoginComponent } from './shared/components/login/login.component';
import { CsvAnalysisComponent } from './shared/components/csv-analysis/csv-analysis.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';

// PRIMENG
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CsvAnalysisComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
