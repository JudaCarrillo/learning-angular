import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ];
  name = signal('Judá');
  disabled = true;
  img = 'https://judacarrillo.github.io/PersonalPortfolio/assets/img/favicon.ico';
  person = {
    name: 'Judá',
    age: 18,
    avatar : 'https://judacarrillo.github.io/PersonalPortfolio/assets/img/favicon.ico'
  };
  
  private age = 18;

  getAge () {
    return this.age
  }

  clickHandler () {
    alert('Hola')
  }

  changeHandler (e: Event) {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler (e: KeyboardEvent) {
    const input = e.target as HTMLInputElement
    console.log(input.value);    
  }
}
