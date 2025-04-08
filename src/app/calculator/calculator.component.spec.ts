// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CalculatorComponent } from './calculator.component';

// describe('CalculatorComponent', () => {
//   let component: CalculatorComponent;
//   let fixture: ComponentFixture<CalculatorComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CalculatorComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(CalculatorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule]  // Required for [(ngModel)] to work
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    component.num1 = 10;
    component.num2 = 5;
    component.sum();
    expect(component.result).toBe(15);
  });

  it('should subtract two numbers correctly', () => {
    component.num1 = 20;
    component.num2 = 8;
    component.sub();
    expect(component.result).toBe(12);
  });

  it('should multiply two numbers correctly', () => {
    component.num1 = 6;
    component.num2 = 4;
    component.mul();
    expect(component.result).toBe(24);
  });

  it('should divide two numbers correctly', () => {
    component.num1 = 20;
    component.num2 = 4;
    component.div();
    expect(component.result).toBe(5);
  });

  it('should handle division by zero', () => {
    component.num1 = 10;
    component.num2 = 0;
    component.div();
    expect(component.result).toBeNaN();  // Handling division by zero
  });

  it('should disable buttons when inputs are empty', () => {
    component.num1 = 0;
    component.num2 = 0;
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons.forEach(button => {
      expect(button.disabled).toBeTrue();
    });
  });
});

