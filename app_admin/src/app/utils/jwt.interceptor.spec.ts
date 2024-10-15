import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor'; // Ensure correct capitalization

describe('JwtInterceptor', () => {
  let interceptor: JwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Include HttpClientModule to prevent injection errors
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      ],
    });

    interceptor = TestBed.inject(JwtInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
