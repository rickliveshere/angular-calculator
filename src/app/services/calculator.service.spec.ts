import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });

  it('can add 2 positive numbers together', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.add(10, 15);
    expect(result).toBe(25);
  });

  it('can subtract 2 positive numbers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.subtract(15, 10);
    expect(result).toBe(5);
  });

  it('can subtract a larger number from a smaler number and receive a negative result', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.subtract(10, 15);
    expect(result).toBe(-5);
  });

  it('can multiply 2 positive numbers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.multiply(10, 20);
    expect(result).toBe(200);
  });

  it('can divide 2 positive numbers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.divide(10, 5);
    expect(result).toBe(2);
  });

  it('can receive decimal answer where divisor is larger than dividend', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.divide(5, 10);
    expect(result).toBe(0.5);
  });

  it('can add 2 negative numbers together', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.add(-10, -15);
    expect(result).toBe(-25);
  });

  it('can add positive and negative numbers together', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.add(-10, 15);
    expect(result).toBe(5);
  });

  it('can subtract 2 negative numbers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.subtract(-10, -15);
    expect(result).toBe(5);
  });

  it('can multiply 2 negative numbers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.multiply(-5, -5);
    expect(result).toBe(25);
  });

  it('can divide 2 negative numbers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.divide(-10, -5);
    expect(result).toBe(2);
  });

  it('cannot divide by 0', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(function() { service.divide(10, 0); }).toThrow(new Error("Second number cannot be zero"));
  });
});
