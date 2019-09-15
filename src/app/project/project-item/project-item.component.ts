import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() updateProject = new EventEmitter<void>();
  @Output() deleteProject = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  openInviteDialog() {
    this.onInvite.emit();
  }

  updateProjectClick() {
    this.updateProject.emit();
  }

  onDeleteClick() {
    this.deleteProject.emit();
  }
}
