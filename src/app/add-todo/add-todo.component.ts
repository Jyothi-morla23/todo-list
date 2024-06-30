import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  taskTitle: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.taskTitle.trim()) {
      this.taskService.addTask(this.taskTitle);
      this.taskTitle = '';
    }
  }
}
