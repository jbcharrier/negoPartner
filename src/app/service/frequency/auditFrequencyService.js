"use strict";

export class AuditFrequencyService {
  constructor() {
    'ngInject';
    this.frequency = ['Ponctuel', 'Mensuel', 'Trimestriel', 'Semestriel', 'Annuel'];
  }
  
  getFrequencyList () {
    return this.frequency;
  }
}
