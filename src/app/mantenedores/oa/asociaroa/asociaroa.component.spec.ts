import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociaroaComponent } from './asociaroa.component';

describe('AsociaroaComponent', () => {
  let component: AsociaroaComponent;
  let fixture: ComponentFixture<AsociaroaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsociaroaComponent]
    });
    fixture = TestBed.createComponent(AsociaroaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
