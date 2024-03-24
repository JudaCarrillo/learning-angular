import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CounterComponent } from '@shared/Components/counter/counter.component';
import { WaveAudioComponent } from '@info/Components/wave-audio/wave-audio.component';
import { HighlightDirective } from '@shared/Directives/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CounterComponent,
    CommonModule,
    WaveAudioComponent,
    HighlightDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(Number(input.valueAsNumber));
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
