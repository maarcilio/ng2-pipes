import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent {

  public dateNow: Date = new Date();
  public cep: number = 27971759;
  public cpf: number = 40540858579;
  public cnpj: number = 86755213000149;
  public decimal: number = 6559754.65;
  
  //8 digitos
  public telefoneA: number = 99365345;
  //8 digitos DD
  public telefoneB: number = 3199365345;
  //9 digitos
  public telefoneC: number = 999365345;
  //9 digitos com DD
  public telefoneD: number = 31999365345;
}
