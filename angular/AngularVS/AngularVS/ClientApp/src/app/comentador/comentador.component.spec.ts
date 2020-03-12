import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentadorComponent } from './comentador.component';

describe('ComentadorComponent', () => {
  let component: ComentadorComponent;
  let fixture: ComponentFixture<ComentadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
