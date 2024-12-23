import { Component, computed, Input, OnInit } from '@angular/core';

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
  labelLike  = computed(() => `The slider's value is ${this.likeCount}`);
  shareLike  = computed(() => `The slider's value is ${this.shareCount}`);

  onShare() {
    console.log('Share fired');
    this.shareCount += 1;
    // throw new Error('Method not implemented.');
  }
  onLike() {
    console.log('Like fired');
    this.likeCount += 1;
      // Create a computed expression that reads the value input
    // this.labelLike = computed(() => `The slider's value is ${this.likeCount()}`);
    // throw new Error('Method not implemented.');
  }

  constructor() {}

  ngOnInit(): void {

  }
}
