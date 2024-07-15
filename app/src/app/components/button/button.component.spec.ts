import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

@Component({
  template: `<app-button><div>Hello World</div></app-button>`,
})
class TestHostComponent {}

@Component({
  template: `<app-button variant="secondary"></app-button>`,
})
class TestSecondaryButtonComponent {}

describe('ButtonComponent', () => {
  let component: TestHostComponent | TestSecondaryButtonComponent;
  let fixture: ComponentFixture<
    TestHostComponent | TestSecondaryButtonComponent
  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, TestSecondaryButtonComponent],
      imports: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render child element', () => {
    const testFixture = TestBed.createComponent(TestHostComponent);
    const de: DebugElement = testFixture.debugElement.query(By.css('div'));
    const el: Element = de.nativeElement;

    expect(el.textContent).toEqual('Hello World');
  });

  it('should render button--primary by default', () => {
    fixture = TestBed.createComponent(TestHostComponent);
    const compiled = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();

    expect(compiled.classes['button--primary']).toBeTrue();
  });

  it('should render button--secondary', () => {
    fixture = TestBed.createComponent(TestSecondaryButtonComponent);
    const compiled = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();

    expect(compiled.classes['button--secondary']).toBeTrue();
  });
});
