"use strict";

export class OperationFrequencyService {
  constructor() {
    'ngInject';
    this.frequency = ['Ponctuel', 'Quotidien', 'Hebdomadaire', 'Mensuel', 'Trimestriel', 'Semestriel', 'Annuel'];
  }
  
  getFrequencyList () {
    return this.frequency;
  }
}
