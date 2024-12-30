import { Component, computed, Input, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: false,
})
export class CardComponent implements OnInit {
  @Input() value = 0;
  @Input() likeCount = 0;
  @Input() shareCount = 0;
  labelLike = computed(() => `The slider's value is ${this.likeCount}`);
  shareLike = computed(() => `The slider's value is ${this.shareCount}`);
  checked: boolean = false;
  toggleEvents: string[] = [];
  
  onShare() {
    console.log('Share fired');
    this.shareCount += 1;
    // throw new Error('Method not implemented.');
  }

  onLike() {
    console.log('Like fired');
    this.likeCount += 1;
  }

  slideToggleChange(event: MatSlideToggleChange) {
    this.checked = event.source.checked;
    this.toggleEvents.push(`MatSlideToggleChange: checked = ${event.checked}`);
    console.log('slideToggleChange fired');
  }

  constructor() {}

  ngOnInit(): void {}
}
