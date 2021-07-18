import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor() { }
  @Input() item = {
    created: '',
    description: '',
    due: '',
    id: '',
    status: '',
    title: '',
    userName: ''
  }
  
  ngOnInit(): void {
    this.item.created = formatDate(this.item.created, 'dd/MM/yyyy', 'en-US');
    this.item.due = formatDate(this.item.due, 'dd/MM/yyyy', 'en-US');
  }

}
