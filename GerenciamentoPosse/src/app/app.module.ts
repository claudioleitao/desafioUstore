import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { OrcComponent } from './orc/orc.component';
import { SnagasComponent } from './snagas/snagas.component';
import { GoblinsComponent } from './goblins/goblins.component';
import { UrukhaisComponent } from './urukhais/urukhais.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    OrcComponent,
    SnagasComponent,
    GoblinsComponent,
    UrukhaisComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
