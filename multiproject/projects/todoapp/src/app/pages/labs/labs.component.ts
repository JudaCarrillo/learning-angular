import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent implements OnInit, OnDestroy {
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio',
  ]);
  name = signal('Judá');
  disabled = true;
  img =
    'https://judacarrillo.github.io/PersonalPortfolio/assets/img/favicon.ico';
  person = signal({
    name: 'Judá',
    age: 18,
    avatar:
      'https://judacarrillo.github.io/PersonalPortfolio/assets/img/favicon.ico',
  });

  private age = 18;

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50, {
    nonNullable: true,
  });
  nameCtrl = new FormControl(50, {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^\\S.*$'),
    ],
  });

  sub: Subscription | null = null;

  ngOnInit(): void {
    this.handleFormSubscription();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  getAge() {
    return this.age;
  }

  handleFormSubscription() {
    this.sub = this.colorCtrl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  clickHandler() {
    alert('Hola');
  }

  changeHandler(e: Event) {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  changeAge(e: Event) {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        age: parseInt(newValue, 10),
      };
    });
  }

  changeName(e: Event) {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        name: newValue,
      };
    });
  }

  keydownHandler(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    console.log(input.value);
  }
}
