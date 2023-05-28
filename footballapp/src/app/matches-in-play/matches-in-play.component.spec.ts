import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesInPlayComponent } from './matches-in-play.component';

describe('MatchesInPlayComponent', () => {
  let component: MatchesInPlayComponent;
  let fixture: ComponentFixture<MatchesInPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesInPlayComponent]
    });
    fixture = TestBed.createComponent(MatchesInPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
