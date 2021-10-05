import React, {Component} from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Alert,
    Table,
    Button,
    Container,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter,
} from "reactstrap";

import swal from 'sweetalert';
import Header from '../components/Header';
import Footer from "../components/Footer";

const data = [];

class Users extends Component {
    state = {
        data: data,

        registeredUsers: [
            {name: 'Andrés', lastname: 'Díaz', role: 'Administrator'},
            {name: 'Fabián', lastname: 'Varón', role: 'Administrator'},
            {name: 'Karent', lastname: 'Manchabajoy', role: 'Administrator'},
            {name: 'Sebastián', lastname: 'Ortíz', role: 'Administrator'},
            {name: 'José', lastname: 'Cardona', role: 'Administrator'}
        ],
        notificationUsers: [
            {name: 'Juan', lastname: 'Gómez', state: ''},
            {name: 'Steven', lastname: 'Hurtado', state: ''}
        ],

        form: {
            id: '',
            name: '',
            lastname: '',
            role: '',
            state: ''
        },

        modalinsert: false,
        modalEdit: false,
        alert: false
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    showModalEdit = (register) => {
        this.setState({ modalEdit: true, form: register });
    }

    hideModalEdit = () => {
        this.setState({ modalEdit: false });
    }

    modify = (dato) => {
        var cont = 0;
        var list = this.state.data;
        console.log(list);
        list.map((register) => {
            if (dato.id === register.id) {
                list[cont].description = dato.description;
                list[cont].price = dato.price;
                list[cont].state = dato.state;
            }
            cont++;
        });
        this.setState({ data: list, modalEdit: false });
        swal("Successful Operation.", "The register with id: " + dato.id + ", was successfully modified.", "success");
    }

    render() {
        return (
            <>
                <Header />
                
                <div 
                    style={{
                        marginTop: '40px', 
                        width: '90%', 
                        marginLeft: 'auto', 
                        marginRight: 'auto'
                    }}>

                    <h3> User Management </h3>
                    <hr />
                </div>

                <Container className="sales">
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.registeredUsers.map((element) => (
                                <tr>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.lastname}</td>
                                    <td>{element.role}</td> 
                                    <td>
                                        <Button color="primary" onClick={() => this.showModalEdit(element)} > Edit </Button> {"  "}
                                        <Button color="danger" onClick={() => this.delete(element)} > Delete </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalEdit} >
                    <ModalHeader>
                        <div>
                            <h3>Modify User</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.state.form.id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Name:</label>
                            <input className="form-control" readOnly name="name" type="text" value={this.state.form.name} />
                        </FormGroup>
                        <FormGroup>
                            <label>Lastname:</label>
                            <input className="form-control" readOnly name="lastname" type="text" onChange={this.handleChange} value={this.state.form.lastname} />
                        </FormGroup>
                        <FormGroup>
                            <label> Role: </label>
                            <select className="form-control" name="role" onChange={this.handleChange}>
                                <option value="" selected disabled hide style={{display:'none'}}> Change Role </option>
                                <option value="Available"> Administrator </option>
                                <option value="Unavailable"> Seller </option>
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.modify(this.state.form)} > Modify </Button>
                        <Button color="danger" onClick={() => this.hideModalEdit()}> Cancel </Button>
                    </ModalFooter>
                </Modal>
                <Footer/>   
            </>
        );
    }
}

export default Users;