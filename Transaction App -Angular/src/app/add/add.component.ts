import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  title: string = 'angular';
  name: string = "";

  datastore: any = [];


  closeResult = '';
  amount: number = 10;
  data: any = {// obj has  to push  in to server when we submit
    amount: "",
    description: "",
    transectionType: ""
  };
  // data1: Array<any>
  results: any
  totalRecords: number
  page: number = 1

  // public transection: any=[];
  constructor(private _datatable: DataService, private modalService: NgbModal,) {
    this.datastore = new Array<any>()

  }

  ngOnInit() {


    this._datatable.getData().subscribe((res: any) => {
      debugger;
      // this.transection = res;
      let running_balance: number = 0;

      for (let a of res) { //calculating running balence
        a.transectionType == "Credit" ? running_balance = running_balance + parseInt(a.amount) : 0;
        a.transectionType == "Debit" ? running_balance = running_balance - parseInt(a.amount) : 0;
        // if (running_balance >= 0) 
          this.datastore.push({      //pushing the data into arry
            amount: a.amount,
            description: a.description,
            transectionType: a.transectionType,
            running_balance: running_balance
          });
        

      }


      this.totalRecords = this.datastore.length

      this.datastore = this.datastore.reverse(); //reversing the array that shows the table latest teansaction on top



    });

  }



  submitData() {// onsubmiting all data from module popup push into the server
    debugger
    this._datatable.registeruser(this.data).subscribe((res: any) => {
      debugger;
      this.modalService.dismissAll();
      this.datastore = [];
      this.ngOnInit();

    });





  }
  // const data={
  //   'credit1': this.credit,
  //   'debit1':  this.debit
  // }
  open(content) {// some validation module popup
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

 


