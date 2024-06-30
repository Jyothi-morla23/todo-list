import { Injectable } from '@angular/core';
import { Task } from './task-model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId: number = 1;

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    const newTask: Task = {
      Id: this.nextId++,
      Title: title,
      Completed: false,
    };
    this.tasks.push(newTask);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.Id != id);
  }

  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find((task) => task.Id === id);
    if (task) {
      task.Completed = !task.Completed;
    }
  }
}
