import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });
});

describe('CalculatorService - Addition', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('can add 2 positive integers together', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.add(10, 15);
    expect(result).toBe(25);
  });

  it('can add positive and negative integers together', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.add(-10, 15);
    expect(result).toBe(5);
  });

  it('can add 2 negative integers together', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.add(-10, -15);
    expect(result).toBe(-25);
  });

  it('can add 2 positive decimals together', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.add(0.5, 0.2);
    expect(result).toBe(0.7);
  });

  it('can add positive and negative decimals together', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.add(-0.5, 0.2);
    expect(result).toBe(-0.3);
  });

  it('can add 2 negative decimals together', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.add(-0.5, -0.5);
    expect(result).toBe(-1);
  });
});

describe('CalculatorService - Subtraction', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('can subtract 2 positive integers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.subtract(15, 10);
    expect(result).toBe(5);
  });

  it('can subtract a larger integers from a smaller integers and receive a negative result', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.subtract(10, 15);
    expect(result).toBe(-5);
  });

  it('can subtract 2 negative integers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.subtract(-10, -15);
    expect(result).toBe(5);
  });

  it('can subtract 2 positive decimals', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.subtract(0.7, 0.2);
    expect(result).toBe(0.5);
  });

  it('can subtract a larger decimal from a smaller decimal and receive a negative result', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.subtract(0.5, 0.7);
    expect(result).toBe(-0.2);
  });

  it('can subtract 2 negative decimals', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.subtract(-0.5, -1.5);
    expect(result).toBe(2);
  });
});

describe('CalculatorService - Multiplication', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('can multiply 2 positive integers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.multiply(10, 20);
    expect(result).toBe(200);
  });

  it('can multiply 2 negative integers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.multiply(-5, -5);
    expect(result).toBe(25);
  });

  it('can multiply a positive and negative integer', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.multiply(-10, 20);
    expect(result).toBe(-200);
  });

  it('can multiply 2 positive decimals', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.multiply(10.5, 20.5);
    expect(result).toBe(215.25);
  });

  it('can multiply 2 negative decimals', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.multiply(-5.1, -5.4);
    expect(result).toBe(27.54);
  });

  it('can multiply a positive and negative decimals', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.multiply(10.1, -20.2);
    expect(result).toBe(-204.02);
  });
});

describe('CalculatorService - Division', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('can divide 2 positive integers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.divide(10, 5);
    expect(result).toBe(2);
  });

  it('can receive decimal answer where divisor is larger than dividend', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.divide(5, 10);
    expect(result).toBe(0.5);
  });

  it('cannot divide by 0', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(function() { service.divide(10, 0); }).toThrow(new Error("Second number cannot be zero"));
  });

  it('can divide 2 negative integers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.divide(-10, -5);
    expect(result).toBe(2);
  });

  it('can divide 2 positive decimals', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.divide(10.0, 5.0);
    expect(result).toBe(2);
  });

  it('can divide 2 negative decimals', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let result = service.divide(-10.0, -5.0);
    expect(result).toBe(2);
  });
});