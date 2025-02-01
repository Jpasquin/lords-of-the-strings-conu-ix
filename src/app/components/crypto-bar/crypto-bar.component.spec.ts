import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoBarComponent } from './crypto-bar.component';

describe('CryptoBarComponent', () => {
  let component: CryptoBarComponent;
  let fixture: ComponentFixture<CryptoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
