import React, { Component } from 'react';

import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter
} from "reactstrap";

class Users extends Component {
    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.props.modalEdit} >
                    <ModalHeader>
                        <div>
                            <h3>Modify User</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.props.form._id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Name:</label>
                            <input className="form-control" readOnly name="name" type="text" value={this.props.form.name} />
                        </FormGroup>
                        <FormGroup>
                            <label>Email:</label>
                            <input className="form-control" readOnly name="email" type="text" value={this.props.form.email} />
                        </FormGroup>
                        <FormGroup>
                            <label> Role: </label>
                            <select className="form-control" name="role" onChange={this.props.handleChange}>
                                <option value="" selected disabled hide style={{ display: 'none' }}> Change role </option>
                                <option value="Administrator"> Administrator </option>
                                <option value="Seller"> Seller </option>
                                <option value="Pending"> Pending </option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <label> State: </label>
                            <select className="form-control" name="state" onChange={this.props.handleChange}>
                                <option value="" selected disabled hide style={{ display: 'none' }}> Change state </option>
                                <option value="Authorized"> Authorized </option>
                                <option value="Unauthorized"> Unauthorized </option>
                                <option value="Pending"> Pending </option>
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.props.modify(this.props.form)} > Modify </Button>
                        <Button color="danger" onClick={() => this.props.hideME()}> Cancel </Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Users;