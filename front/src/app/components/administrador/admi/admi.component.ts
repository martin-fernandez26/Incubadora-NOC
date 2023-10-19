import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {

  selected: Date | null;
  constructor() {
    this.selected = null;
   }

  ngOnInit(): void {
  }
  
  tasks: string[] = [];

  addTask(task: string, date: string): void {
    this.tasks.push(`${task} - ${date}`);
    
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  checkComplete(task: string): void {
    console.log(`Task ${task} marked as complete.`);
    // Add your logic for checking tasks as complete
  }

  readTask(): void {
    console.log('Tasks:');
    this.tasks.forEach(task => {
      console.log(task);
    });
  }

}
