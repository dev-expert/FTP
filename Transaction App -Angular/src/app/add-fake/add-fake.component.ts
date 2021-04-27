import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-add-fake',
  templateUrl: './add-fake.component.html',
  styleUrls: ['./add-fake.component.css']
})
export class AddFakeComponent implements OnInit {
  ngOnInit(): void {
    this._datatable.getData().subscribe(data => {this.data1 = data})

  }
  public data1 = {
  }
  
  public data = {
    Amount: 0,
    TransactionType : "Debit",
    Discription : '',
    Balance : 0

  }
 
  

  constructor(private _datatable: DataService) { }

  AddData(data) {
    this.data.Balance = this.data1[0].TransactionType === "Credit" ?  this.data1[0].Balance + this.data1[0].Amount : this.data1[0].Balance - this.data1[0].Amount
    this._datatable.registeruser(data).toPromise()
    .then(()=>{ console.log(this.data)})
    this._datatable.getData().subscribe(data => {this.data1 = data})
    location.reload();
  };
  

}
