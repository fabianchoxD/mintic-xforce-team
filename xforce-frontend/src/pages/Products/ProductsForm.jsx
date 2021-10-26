import React, {Component} from 'react';

import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter
} from "reactstrap";

class ProductsForm extends Component {
    render() {
        return (
            <>
                <Modal isOpen={this.props.modalInsert} style={{ marginTop: '80px' }}>
                    <ModalHeader>
                        <div>
                            <h3>Add Products</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        {/* <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" />
                        </FormGroup> */}
                        <FormGroup>
                            <label>Description:</label>
                            <input className="form-control" name="description" type="text" onChange={this.props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Price:</label>
                            <input className="form-control" name="price" type="text" onChange={this.props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label> State: </label>
                            <select className="form-control" name="state" onChange={this.props.handleChange}>
                                <option value="" selected disabled hide style={{ display: 'none' }}></option>
                                <option value="Available"> Available </option>
                                <option value="Unavailable"> Unavailable </option>
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.props.insert()}>Insert</Button>
                        <Button color="danger" onClick={() => this.props.hideMI()}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.props.modalEdit} style={{ marginTop: '80px' }}>
                    <ModalHeader>
                        <div>
                            <h3>Modify Product</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.props.form._id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Description:</label>
                            <input className="form-control" name="description" type="text" onChange={this.props.handleChange} value={this.props.form.description} />
                        </FormGroup>
                        <FormGroup>
                            <label>Price:</label>
                            <input className="form-control" name="price" type="text" onChange={this.props.handleChange} value={this.props.form.price} />
                        </FormGroup>
                        <FormGroup>
                            <label> State: </label>
                            <select className="form-control" name="state" onChange={this.props.handleChange} value={this.props.form.state}>
                                <option value="" selected disabled hide style={{ display: 'none' }}></option>
                                <option value="Available"> Available </option>
                                <option value="Unavailable"> Unavailable </option>
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.props.modify(this.props.form)} > Modify </Button>
                        <Button color="danger" onClick={() => this.props.hideME()}> Cancel </Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default ProductsForm;