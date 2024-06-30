import { Component, OnInit } from '@angular/core';
import { Task } from '../task-model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadInitialData();
  }

  async loadInitialData() {
    this.tasks = await this.taskService.getTasks();
    console.log(this.tasks);
  }
  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.loadInitialData();
  }

  toggleTaskCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
  }
}
