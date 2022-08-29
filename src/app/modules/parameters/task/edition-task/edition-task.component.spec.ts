import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionTaskComponent } from './edition-task.component';

describe('EditionTaskComponent', () => {
  let component: EditionTaskComponent;
  let fixture: ComponentFixture<EditionTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
