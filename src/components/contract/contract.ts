import { Component } from '@angular/core';
@Component({
  selector: 'contract',
  templateUrl: 'contract.html'
})
export class ContractComponent {

  text: string;

  constructor() {
    console.log('Hello ContractComponent Component');
    this.text = 'Hello World';
  }

}
