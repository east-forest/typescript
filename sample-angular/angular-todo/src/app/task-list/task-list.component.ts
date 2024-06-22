import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  tasks: Task[] = [
    { title: '牛乳を買う', done: false, deadline: new Date('2021-06-01') },
    { title: '可燃ごみを出す', done: true, deadline: new Date('2021-06-10') },
    { title: '銀行に行く', done: true, deadline: new Date('2021-06-11') },
  ];

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
