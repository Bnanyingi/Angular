import { newArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { BudgetItem } from 'src/shared/models/budget-item.model';


@Component({
  selector: 'app-budget-tem-list',
  templateUrl: './budget-tem-list.component.html',
  styleUrls: ['./budget-tem-list.component.scss']
})

export class BudgettemlistComponent implements OnInit {
  @Input() budgetitems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }


  ngOnInit(): void {

  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);

  }
}





