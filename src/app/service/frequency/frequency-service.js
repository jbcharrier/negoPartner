"use strict";

export class FrequencyService {
  constructor() {
    'ngInject';
    this.frequency = ['Ponctuel', 'Quotidien', 'Hebdomadaire', 'Mensuel', 'Trimestriel', 'Semestriel', 'Annuel'];
  }
  
  getFrequencyList () {
    return this.frequency;
  }
}
