import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DropdownComponent } from './dropdown.component';

@Component({
  template: `<app-dropdown
    [dropdownContent]="[
      { id: 1, label: 'test', click: this.testFn },
      { id: 2, label: 'test 2', click: this.test2Fn }
    ]"
  ></app-dropdown>`,
})
class TestHostComponent {
  testFn = jasmine.createSpy();
  test2Fn = jasmine.createSpy();
}

describe('DropdownComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [DropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render options', fakeAsync(() => {
    const compiled = fixture.debugElement.queryAll(By.css('.dropdown-item'));

    console.log(compiled[0].triggerEventHandler('click'));

    tick();

    expect(component.testFn).toHaveBeenCalled();
    expect(component.test2Fn).not.toHaveBeenCalled();
  }));

  it('should render dropdown button', fakeAsync(() => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Pokaż');
  }));
});
