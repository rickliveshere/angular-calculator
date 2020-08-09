import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CalculatorService {

  private isZero(number: number): boolean {
    number = +number;
    return !number;
  }

  add(firstNumber: number, secondNumber: number) : number {
    return firstNumber + secondNumber;
  }

  subtract(firstNumber: number, secondNumber: number) : number {
    return firstNumber - secondNumber;
  }

  multiply(firstNumber: number, secondNumber: number) : number {
    return firstNumber * secondNumber;
  }

  divide(firstNumber: number, secondNumber: number) : number {

    if (this.isZero(secondNumber)) {
      throw new Error("Second number cannot be zero");
    }

    return firstNumber / secondNumber;
  }
}
