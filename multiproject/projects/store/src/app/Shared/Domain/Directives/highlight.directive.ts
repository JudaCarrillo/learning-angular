import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  private element = inject(ElementRef);

  constructor() {}

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
