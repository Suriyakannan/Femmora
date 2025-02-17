import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDressComponent } from './new-dress.component';

describe('NewDressComponent', () => {
  let component: NewDressComponent;
  let fixture: ComponentFixture<NewDressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
