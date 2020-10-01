import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJSONComponent } from './get-json.component';

describe('GetJSONComponent', () => {
  let component: GetJSONComponent;
  let fixture: ComponentFixture<GetJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetJSONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
