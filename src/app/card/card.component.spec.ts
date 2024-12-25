import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('CardComponent likeCount Tests', () => {
    it('should have default likeCount of 0', () => {
      expect(component.likeCount).toBe(0);
    });
  
    it('should increment likeCount by 1 on onLike()', () => {
      component.onLike();
      expect(component.likeCount).toBe(1);
    });
  
    it('should increment likeCount multiple times', () => {
      component.onLike();
      component.onLike();
      expect(component.likeCount).toBe(2);
    });
  
    it('should compute labelLike correctly', () => {
      component.onLike();
      const labelText = component.labelLike();
      expect(labelText).toBe(`The slider's value is 1`);
    });
  });
});


