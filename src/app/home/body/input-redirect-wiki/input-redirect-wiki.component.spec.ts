import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRedirectWikiComponent } from './input-redirect-wiki.component';

describe('InputRedirectWikiComponent', () => {
  let component: InputRedirectWikiComponent;
  let fixture: ComponentFixture<InputRedirectWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRedirectWikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRedirectWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
