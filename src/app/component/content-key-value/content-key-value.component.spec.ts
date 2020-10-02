import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentKeyValueComponent } from './content-key-value.component';

describe('ContentKeyValueComponent', () => {
  let component: ContentKeyValueComponent;
  let fixture: ComponentFixture<ContentKeyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentKeyValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentKeyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
