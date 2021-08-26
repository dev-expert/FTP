import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
class ModalExample extends React.Component{
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    handelModal(){
        this.setState({show:!this.state.show})
    }
    render(){
        return(
            <div>
                <Button onClick={()=>this.handelModal()}>Add Transaction</Button>
                <Modal animation={false} show={this.state.show} onHide={()=>this.handelModal()}>
                    <Modal.Header closeButton>Transaction Details</Modal.Header>
                    <Modal.Body>
                        <form>
                            <label>
                                Choose Type of Transaction
                                <select>
                                    <option value="credit" id="credit">Credit</option>
                                    <option value="debit" id="debit">Debit</option>
                                </select>
                            </label>
                            <label>
                                Enter Description:
                                <input type="text" id="description" name="description" />
                            </label>
                            <label>
                                Enter Ammount:
                                <input type="number" name="ammount"  name="ammount" />
                            </label>
                        </form>
                        <Modal.Footer>
                            <Button onClick={()=>this.handelModal()}>
                                Add Transaction
                            </Button>
                        </Modal.Footer>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default ModalExample