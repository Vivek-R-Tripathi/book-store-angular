import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentbookComponent } from './recentbook.component';

describe('RecentbookComponent', () => {
  let component: RecentbookComponent;
  let fixture: ComponentFixture<RecentbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentbookComponent]
    });
    fixture = TestBed.createComponent(RecentbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
