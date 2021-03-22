import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatatableService } from './datatable.services';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  // name: string = "";
  // CLOSE RESULT REASON
  closeResult = '';

  // BALANCE MAINTAIN
  b: any = [];
  rb = 0;

  // TRANSACTION EXPORT
  data1: any = {
    type: "",
    amount: "",
    description: ""
  };

  // CURRENT TIME AND DATA
  today = new Date();
  todaysDataTime = '';

  // IMPORT TRANSACTION
  transectiontable: any = [];
  constructor(private modalService: NgbModal, private _datatable: DatatableService) {
    this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
  }

  ngOnInit() {
    this._datatable.getdata().subscribe((res: any) => {
      // this.transectiontable = res;
      let rb: number = 0;
      // BALANCE 
      for (let a of res) {
        a.type == "Credit" ? rb = rb + parseInt(a.amount) : 0;
        a.type == "Debit" ? rb = rb - parseInt(a.amount) : 0;


        // PUSSING DATA INTO TABLE
        this.b.push({
          amount: a.amount,
          description: a.description,
          type: a.type,
          rb: rb
        });

      }

      // RECENT ENTERED TRANSACTION
      this.b = this.b.reverse();
      console.log(this.b)

    });

  }

  // FUNCTION TO EXPORT TRANSACTION
  postModalData() {
    console.log(this.data1);
    this._datatable.registeruser(this.data1);
    this.b = [];
    this.ngOnInit();

  }

  open(content) {
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






