import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCellRendererComponent } from './dropdown-cell-renderer.component';

describe('DropdownCellRendererComponent', () => {
  let component: DropdownCellRendererComponent;
  let fixture: ComponentFixture<DropdownCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownCellRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
