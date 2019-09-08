import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() themeToggle = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  opensidebar() {
    this.toggle.emit();
  }
  onchange(checked: boolean) {
    this.themeToggle.emit(checked);
  }
}
