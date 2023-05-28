import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchBarComponent } from './match-bar.component';

describe('MatchBarComponent', () => {
  let component: MatchBarComponent;
  let fixture: ComponentFixture<MatchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchBarComponent]
    });
    fixture = TestBed.createComponent(MatchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
