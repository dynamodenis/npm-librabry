import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamoLibComponent } from './dynamo-lib.component';

describe('DynamoLibComponent', () => {
  let component: DynamoLibComponent;
  let fixture: ComponentFixture<DynamoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
