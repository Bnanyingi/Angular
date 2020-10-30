import { newArray } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog/index';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';


@Component({
  selector: 'app-budget-tem-list',
  templateUrl: './budget-tem-list.component.html',
  styleUrls: ['./budget-tem-list.component.scss']
})



export class BudgettemlistComponent implements OnInit {
  @Input() budgetitems: BudgetItem[];
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {

  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);

  }

  onCardClicked(item: BudgetItem) {
    //show the edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px' ,data: item

    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }
}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;

}






