import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthHomePage } from './auth-home.page';

describe('AuthHomePage', () => {
  let component: AuthHomePage;
  let fixture: ComponentFixture<AuthHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
