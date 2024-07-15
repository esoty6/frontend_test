import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from '../../services/user.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Zadanie rekrutacyjne');
  });

  it('should render user name', () => {
    const service = TestBed.inject(UserService);
    const compiled = fixture.nativeElement as HTMLElement;
    service.setUserName('Test Name');
    service.showUserName();
    fixture.detectChanges();
    expect(compiled.textContent).toContain('Test Name');
  });
});
