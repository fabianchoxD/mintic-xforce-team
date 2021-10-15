import React, {Component} from "react";

import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter
} from "reactstrap";

class SalesForm extends Component {
    render() {
        return(
            <React.Fragment>
                <Modal isOpen={this.props.modalInsert} style={{ marginTop: '80px' }}>
                    <ModalHeader>
                        <div>
                            <h3> Add Sales </h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.props.data.length + 1} />
                        </FormGroup>
                        <FormGroup>
                            <label>Total:</label>
                            <input className="form-control" name="total" type="text" onChange={this.props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Description:</label>
                            <input className="form-control" name="description" type="text" onChange={this.props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Quantity:</label>
                            <input className="form-control" name="quantity" type="text" onChange={this.props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Unit Price:</label>
                            <input className="form-control" name="unitPrice" type="text" onChange={this.props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Sale Date:</label>
                            <input className="form-control" name="saleDate" type="date" onChange={this.props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Customer Identification:</label>
                            <input className="form-control" name="identification" type="text" onChange={this.props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Customer Name:</label>
                            <input className="form-control" name="nameClient" type="text" onChange={this.props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label> State: </label>
                            <select className="form-control" name="state" onChange={this.props.handleChange}>
                                <option value="" selected disabled hide style={{ display: 'none' }}></option>
                                <option value="In Process"> In Process </option>
                                <option value="Cancelled"> Cancelled </option>
                                <option value="Delivered"> Delivered </option>
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.props.insert()}> Insert </Button>
                        <Button color="danger" onClick={() => this.props.hideMI()}> Cancel </Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.props.modalEdit} style={{ marginTop: '80px' }}>
                    <ModalHeader>
                        <div>
                            <h3>Modify Producto</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.props.form.id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Total:</label>
                            <input className="form-control" name="total" type="text" onChange={this.props.handleChange} value={this.props.form.total} />
                        </FormGroup>
                        <FormGroup>
                            <label>Description:</label>
                            <input className="form-control" name="description" type="text" onChange={this.props.handleChange} value={this.props.form.description} />
                        </FormGroup>
                        <FormGroup>
                            <label>Quantity:</label>
                            <input className="form-control" name="quantity" type="text" onChange={this.props.handleChange} value={this.props.form.quantity} />
                        </FormGroup>
                        <FormGroup>
                            <label>Unit Price:</label>
                            <input className="form-control" name="unitPrice" type="text" onChange={this.props.handleChange} value={this.props.form.unitPrice} />
                        </FormGroup>
                        <FormGroup>
                            <label>Sale Date:</label>
                            <input className="form-control" name="saleDate" type="text" onChange={this.props.handleChange} value={this.props.form.saleDate} />
                        </FormGroup>
                        <FormGroup>
                            <label>Customer Identification:</label>
                            <input className="form-control" name="identification" type="text" onChange={this.props.handleChange} value={this.props.form.identification} />
                        </FormGroup>
                        <FormGroup>
                            <label>Customer Name:</label>
                            <input className="form-control" name="nameClient" type="text" onChange={this.props.handleChange} value={this.props.form.nameClient} />
                        </FormGroup>
                        <FormGroup>
                            <label> State: </label>
                            <select className="form-control" name="state" onChange={this.props.handleChange}>
                                <option value="" selected disabled hide style={{ display: 'none' }}></option>
                                <option value="In Process"> In Process </option>
                                <option value="Cancelled"> Cancelled </option>
                                <option value="Delivered"> Delivered </option>
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.props.modify(this.props.form)} > Modify </Button>
                        <Button color="danger" onClick={() => this.props.hideME()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default SalesForm;