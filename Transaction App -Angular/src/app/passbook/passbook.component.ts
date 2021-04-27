import { Component, OnInit } from '@angular/core';
// import { table } from 'node:console';
import { DataService } from '../data.service';

@Component({
  selector: 'app-passbook',
  template: `
 
<table>
<thead>
<tr>
<th>Discription</th>
<th>Credit</th>
<th>Debit</th>
<th>Balance</th>
</tr>
</thead>

<tbody>
        <tr *ngFor="let item of data">

          <td>{{item.Discription}}</td>
          <td>
            {{item.TransactionType === "Credit" ? item.Amount : "-"}} 
          </td>
          <td>
            {{item.TransactionType === "Debit" ? item.Amount: "-"}}
          </td>
          <td >
          
            {{item.TransactionType === "Credit" ?  item.Balance + item.Amount : item.Balance - item.Amount}}

          </td>
        </tr>
      </tbody>



</table>



  `,
  styles: [
    `table , th , tr ,td
    {
        color: black;
        padding: 10px;
        font-family: Arial;
        border : solid;
        background-color : orange
    
    }
    `
  ]
})
export class PassbookComponent implements OnInit {
 
  // public columnsToDisplay = ['TransactionType', 'Amount'];

 public data = { }

  constructor(private _dataService : DataService) { }

  ngOnInit(): void {
  this._dataService.getData().subscribe(data => {this.data = data})
  }

}
