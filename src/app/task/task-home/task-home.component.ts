import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from 'app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星  巴克买杯咖啡',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张珊',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务二：完成老板布置的 ppt 作业',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李钟硕',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: '任务三：打扫卫生',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星  巴克买杯咖啡',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '张珊',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务二：完成老板布置的 ppt 作业',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李钟硕',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 3,
      name: '已完成',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星  巴克买杯咖啡',
          completed: false,
          owner: {
            id: 1,
            name: '张珊',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        }
      ]
    },
  ]
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewTask() {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: '新建任务：' } });
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } });
  }

  updateItem(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: '修改任务：', task: task } });
  }

  onDelList( ) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除列表：', content: '您确认删除该列表吗？' } });
    dialogRef.afterClosed().subscribe(res => console.log(res));
  }

  editList(list) {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '更改列表：', list: list } });
    dialogRef.afterClosed().subscribe(res => console.log(res));
  }
  launchNewTaskListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '新增列表：' } });
    dialogRef.afterClosed().subscribe(res => console.log(res));
  }
}
