import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  computed,
  effect,
  signal,
  inject,
  Injector,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../models/task.models';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  tasks = signal<Task[]>([]);

  filter = signal<'all' | 'pending' | 'completed'>('all');
  taskByFilter = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks();

    if (filter === 'pending') {
      return tasks.filter((task) => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  });

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^\\S.*$'),
    ],
  });

  injector = inject(Injector);
  ngOnInit(): void {
    const storage = localStorage.getItem('tasks');
    if (storage) {
      this.tasks.set(JSON.parse(storage));
    }

    this.trackTasks();
  }

  changeHandler() {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value;
      this.addTask(value);
      this.newTaskCtrl.setValue('');
    }
  }

  trackTasks() {
    effect(
      () => {
        localStorage.setItem('tasks', JSON.stringify(this.tasks()));
      },
      { injector: this.injector }
    );
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, i) => i !== index));
  }

  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
    });
  }

  updateTaskEditingMode(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, i) =>
        i === index && !task.completed
          ? { ...task, editing: !task.editing }
          : { ...task, editing: false }
      );
    });
  }

  updateTaskText(index: number, event: Event) {
    const input = event.target as HTMLInputElement;

    this.tasks.update((tasks) => {
      return tasks.map((task, i) =>
        i === index && !task.completed
          ? { ...task, title: input.value, editing: false }
          : { ...task, editing: false }
      );
    });
  }

  changeFilter(filter: 'all' | 'pending' | 'completed') {
    this.filter.set(filter);
  }

  clearCompleted() {
    this.tasks.update((tasks) => tasks.filter((task) => !task.completed));
  }
}
