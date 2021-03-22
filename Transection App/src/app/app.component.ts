import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatatableService } from './datatable.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  // name = "";
  // type;
  // amount;
  // description;

  // parentFunction(data) {
  //   console.log(data);
  //   this.name=data.name;
  // }
  
  closeResult = '';

  transectiontable: any = [
    // { type: 'Credit', ammount: '500', description: 'Furniture Expences' },
    // { type: 'Debit', ammount: '1500', description: 'Wallpaper Expences' },
    // { type: 'Credit', ammount: '5500', description: 'Utencils Expences' },
    // { type: 'Debit', ammount: '2500', description: 'Utility Expences' }
  ];

  constructor(private modalService: NgbModal, private _datatable: DatatableService ) { }

  ngOnInit() {
    this._datatable.getdata().subscribe(data =>this.transectiontable=data)
  }
    
      // this.transectiontable},}

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

  // getCurrentUser(user){
  //   console.log(user);

  // showModalFunction() {
  //   console.log('hello')
  // }

  postModalData() {
    // console.log(".", this.transectiontable)
    let item = {
      ammount: this.transectiontable.amount,
      description: this.transectiontable.description,
      type: this.transectiontable.type
    }
    this._datatable.postdata().subscribe(data =>this.transectiontable=data)
    this.transectiontable.push(item)
  }
}



