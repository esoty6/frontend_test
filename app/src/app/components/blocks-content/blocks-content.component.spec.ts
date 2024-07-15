import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksContentComponent } from './blocks-content.component';

describe('BlocksContentComponent', () => {
  let component: BlocksContentComponent;
  let fixture: ComponentFixture<BlocksContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocksContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocksContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
