import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCodeComponent } from './ngx-code.component';

describe('NgCodeComponent', () => {
  let component: NgCodeComponent;
  let fixture: ComponentFixture<NgCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
