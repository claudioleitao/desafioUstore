import { AdministradorComponent } from '../app/administrador/administrador.component';
import { CadastroComponent } from '../app/cadastro/cadastro.component';
import { GoblinsComponent } from '../app/goblins/goblins.component';
import { LoginComponent } from '../app/login/login.component';
import { OrcComponent } from '../app/orc/orc.component';
import { SnagasComponent } from '../app/snagas/snagas.component';
import { UrukhaisComponent } from '../app/urukhais/urukhais.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'administrador', component : AdministradorComponent},
  {path : 'cadastro', component : CadastroComponent},
  {path : 'goblins', component : GoblinsComponent},
  {path : 'login', component : LoginComponent},
  {path : 'orc', component : OrcComponent},
  {path : 'snagas', component : SnagasComponent},
  {path : 'urukhais', component : UrukhaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
