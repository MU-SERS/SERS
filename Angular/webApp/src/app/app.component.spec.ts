import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { RouterTestingModule } from '@angular/router/testing';
>>>>>>> 565c42ca5754ffdee1a6c15178695f4275ebf326
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
=======
      imports: [
        RouterTestingModule
      ],
>>>>>>> 565c42ca5754ffdee1a6c15178695f4275ebf326
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'webApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('webApp');
=======
  it(`should have as title 'SERS'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SERS');
>>>>>>> 565c42ca5754ffdee1a6c15178695f4275ebf326
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('webApp app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('SERS app is running!');
>>>>>>> 565c42ca5754ffdee1a6c15178695f4275ebf326
  });
});
