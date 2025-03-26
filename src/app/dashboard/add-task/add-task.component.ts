import { Component } from '@angular/core';

interface Task {
  Sr: string;
  taskname: string;
  description: string;
  startDate: string;
  endDate: string;
  taskstatus: string;
  managername: string;
  teammember: string;
  clientname: string;
  domain: string;
}

@Component({
  selector: 'app-add-task', 
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'] 
})
export class AddTaskComponent { 
  tasks: Task[] = []; 
  filteredTasks: Task[] = []; 
  isAddTaskActive = false; 
  isUpdateActive = false;
  isViewActive = false;
  newTask: Task = this.getEmptyTask(); 
  editableTask: Task = this.getEmptyTask(); 
  selectedTask: Task = this.getEmptyTask(); 
  editIndex: number | null = null;
  searchQuery: string = ''; 
  constructor() {
    this.tasks = [
      {
        Sr: '1',
        taskname: 'Task Name', 
        description: 'Description',
        startDate: '0000-00-00',
        endDate: '0000-00-00',
        taskstatus: 'Task status', 
        managername: 'Manager name',
        teammember: 'Team member',
        clientname: 'Client name',
        domain: 'Domain'
      }
    ];
    this.filteredTasks = [...this.tasks]; 
  }

  getEmptyTask(): Task { 
    return {
      Sr: '',
      taskname: '', 
      description: '',
      startDate: '',
      endDate: '',
      taskstatus: '', 
      managername: '',
      teammember: '',
      clientname: '',
      domain: ''
    };
  }

 
  addTask() { 
    this.newTask.Sr = (this.tasks.length + 1).toString(); 
    this.tasks.push({ ...this.newTask });
    this.filteredTasks = [...this.tasks]; 
    this.newTask = this.getEmptyTask(); 
    this.isAddTaskActive = false; 
  }

  
  filterTasks() { 
    this.filteredTasks = this.tasks.filter(task =>
      task.taskname.toLowerCase().includes(this.searchQuery.toLowerCase()) 
    );
  }

  deleteTask(index: number) { 
    this.tasks.splice(index, 1); 
    this.filterTasks();
  }

  openUpdateForm(index: number) {
    this.isUpdateActive = true;
    this.editIndex = index;
    this.editableTask = { ...this.filteredTasks[index] };
  }

  saveUpdate() { 
    if (this.editIndex !== null) {
     
      const mainListIndex = this.tasks.findIndex(t => t.Sr === this.editableTask.Sr); // Renamed from project to task
      this.tasks[mainListIndex] = { ...this.editableTask };
      this.filterTasks(); 
      this.isUpdateActive = false;
    }
  }

  cancelUpdate() {
    this.isUpdateActive = false;
    this.editableTask = this.getEmptyTask(); 
  }

  viewTask(index: number) { 
    this.selectedTask = { ...this.filteredTasks[index] }; 
    this.isViewActive = true;
  }

  closeView() {
    this.isViewActive = false;
  }
}
