import { Component, OnInit, EventEmitter, ViewChild } from "@angular/core";
import { CalculatorService } from "../../services/calculator.service";

const DEFAULT_OPERAND: string = '+';

@Component({
  selector: "app-calculation",
  templateUrl: "./calculation.component.html",
  styleUrls: ["./calculation.component.css"]
})
export class CalculationComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  operand: string;
  result: number;
  errors: string[];
  isCalculation: boolean;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.clear();
  }

  calculate() {    
    this.isCalculation = true;

    this.validate();

    if (!this.errors.length) {
      try {
        switch (this.operand) {
          case '+':
            this.result = this.calculatorService.add(this.firstNumber, this.secondNumber);
            break;
          case '-':
            this.result = this.calculatorService.subtract(this.firstNumber, this.secondNumber);
            break;
          case 'x':
            this.result = this.calculatorService.multiply(this.firstNumber, this.secondNumber);
            break;
          case '/':
            this.result = this.calculatorService.divide(this.firstNumber, this.secondNumber);
            break;
        }
      }
      catch (e) {
        this.errors.push(e.message);
      }
    }

    if (this.errors.length) {
      this.result = null;
    }
  }

  setOperand(operand) {
    this.operand = operand;
    this.calculate();
  }

  clear() {
    this.isCalculation = false;
    this.errors = new Array(); 

    this.firstNumber = null;
    this.secondNumber = null;
    this.operand = DEFAULT_OPERAND;
    this.result = null;
  }

  validate() {
    this.errors = new Array();

    if (isNaN(this.firstNumber)) {
      this.errors.push('Enter a first number');
    }
    
    if (isNaN(this.secondNumber)) {
      this.errors.push('Enter a second number');
    }
  }
}