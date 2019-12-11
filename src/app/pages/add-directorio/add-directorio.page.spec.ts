import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDirectorioPage } from './add-directorio.page';

describe('AddDirectorioPage', () => {
  let component: AddDirectorioPage;
  let fixture: ComponentFixture<AddDirectorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDirectorioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDirectorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
