import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOwnnerComponent } from './sidebar-ownner.component';

describe('SidebarOwnnerComponent', () => {
  let component: SidebarOwnnerComponent;
  let fixture: ComponentFixture<SidebarOwnnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarOwnnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarOwnnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
