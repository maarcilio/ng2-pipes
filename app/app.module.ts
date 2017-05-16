import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Pipes
import { CepPipe } from './pipes/cep.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { DecimalBrPipe } from './pipes/decimal.pipe';
import { TelefonePipe } from './pipes/telefone.pipe';
import { DataPipe } from './pipes/data.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CepPipe,
    CnpjPipe,
    CpfPipe,
    DecimalBrPipe,
    TelefonePipe,
    DataPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
