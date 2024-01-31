import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDecorationsComponent } from './home-decorations.component';

describe('HomeDecorationsComponent', () => {
  let component: HomeDecorationsComponent;
  let fixture: ComponentFixture<HomeDecorationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDecorationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDecorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
