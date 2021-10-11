import React from "react";
import "../App.css";
import "../styles/Ventas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
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

import "../styles/products.css";

const data = [];

class Sales extends React.Component {
    state = {
        data: data,
        form: {
            id: '',
            total: '',
            description: '',
            quantity: '',
            unitPrice: '',
            saleDate: '',
            identification: '',
            nameClient: '',
            state: ''
        },
        modalInsert: false,
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

    showModalInsert = () => {
        this.setState({ modalInsert: true });
    }

    hideModalInsert = () => {
        this.setState({ modalInsert: false });
    }

    showModalEdit = (registro) => {
        this.setState({ modalEdit: true, form: registro });
    }

    hideModalEdit = () => {
        this.setState({ modalEdit: false });
    }

    insert = () => {
        if (this.state.form.total === '' || this.state.form.description === '' || this.state.form.quantity === '' ||
        this.state.form.unitPrice === '' || this.state.form.saleDate === '' || this.state.form.identification === '' ||
        this.state.form.nameClient === '' || this.state.form.state === '') {

            this.setState({alert: true, modalInsert: false});
        
        }
        else {
            var newValue = { ...this.state.form };
            console.log(newValue);
            newValue.id = this.state.data.length + 1;
            var list = this.state.data;
            list.push(newValue);
            // console.log(list);
            this.setState({ data: list, alert: false, modalInsert: false });
            swal("Successful Operation.", newValue.description + ", added successfully.", "success");
            let form = {...this.state.form};
            form.total = ''; form.description = ''; form.quantity = ''; form.unitPrice = ''; form.saleDate = '';
            form.identification = ''; form.nameClient = ''; form.state = ''; 
            this.setState({form});
        }            
    }

    modify = (dato) => {
        var cont = 0;
        var list = this.state.data;
        console.log(list);
        list.map((register) => {
            if (dato.id === register.id) {
                list[cont].total = dato.total;
                list[cont].description = dato.description;
                list[cont].quantity = dato.quantity;
                list[cont].unitPrice = dato.unitPrice;
                list[cont].saleDate = dato.saleDate;
                list[cont].identification = dato.identification;
                list[cont].nameClient = dato.nameClient;
                list[cont].state = dato.state;
            }
            cont++;
        });
        this.setState({ data: list, modalEdit: false });
        swal("Successful Operation.", "The register with id: " + dato.id + ", was successfully modified.", "success");
    }

    delete = (dato) => {
        swal({
            title: "Delete Sale?",
            text: "Are you sure to remove this register " + "<" + dato.description + ">" + " with id: " + dato.id + "?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    var cont = 0;
                    var list = this.state.data;
                    list.map((register) => {
                        if (register.id === dato.id) {
                            list.splice(cont, 1);
                        }
                        cont++;
                    });
                    this.setState({ data: list });
                    swal("Register removed successfully.", {
                        icon: "success",
                    });
                } else {
                    swal("Operation Unrealized.");
                }
            });
    }
    render() {
        return (
            <>
            <br />
                <Header />

                <div className= "titulo">                
                    <h3> Sales Management </h3>
                    <hr />
                </div>


                <Container className="box" style={{marginBottom: '120px'}}>
                    <Alert isOpen={this.state.alert} color="warning">
                        Please complete all field. 
                    </Alert>
                    
                    <br />

                    <div className="flexbox-container">
                        <Button color="success" onClick={() => this.showModalInsert()}> Register a New Sale </Button>
                        <div className="search">
                            <input type="text" placeholder="Search sales" />
                            <IconButton 
                                aria-label="search"
                                style={{
                                    background: 'rgb(45, 124, 214)', 
                                    marginLeft: '6px',
                                    marginTop: '-8px'
                                }}
                            >
                                <SearchIcon sx={{color: 'white'}}/>
                            </IconButton> 
                        </div>
                    </div>    

                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th> Id </th>
                                <th> Total </th>
                                <th> Description </th>
                                <th> Quantity </th>
                                <th> Unit Price </th>
                                <th> Sale Date </th>
                                <th> Customer Identification </th>
                                <th> Customer Name </th>
                                <th> State </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((element) => (
                                <tr>
                                    <td>{element.id}</td>
                                    <td>{element.total}</td>
                                    <td>{element.description}</td>
                                    <td>{element.quantity}</td>
                                    <td>{element.unitPrice}</td>
                                    <td>{element.saleDate}</td>
                                    <td>{element.identification}</td>
                                    <td>{element.nameClient}</td>
                                    <td>{element.state}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.showModalEdit(element)} > Edit </Button> {"  "}
                                        <Button color="danger" onClick={() => this.delete(element)} > Delete </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalInsert} style={{marginTop: '80px'}}>
                    <ModalHeader>
                        <div>
                            <h3> Add Sales </h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.state.data.length+1} />
                        </FormGroup>
                        <FormGroup>
                            <label>Total:</label>
                            <input className="form-control" name="total" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Description:</label>
                            <input className="form-control" name="description" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Quantity:</label>
                            <input className="form-control" name="quantity" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Unit Price:</label>
                            <input className="form-control" name="unitPrice" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Sale Date:</label>
                            <input className="form-control" name="saleDate" type="date" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Customer Identification:</label>
                            <input className="form-control" name="identification" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Customer Name:</label>
                            <input className="form-control" name="nameClient" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label> State: </label>
                            <select className="form-control" name="state" onChange={this.handleChange}>
                                <option value="" selected disabled hide style={{display:'none'}}></option>
                                <option value="In Process"> In Process </option>
                                <option value="Cancelled"> Cancelled </option>
                                <option value="Delivered"> Delivered </option>
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.insert()}> Insert </Button>
                        <Button color="danger" onClick={() => this.hideModalInsert()}> Cancel </Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEdit} style={{marginTop: '80px'}}>
                    <ModalHeader>
                        <div>
                            <h3>Modify Producto</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.state.form.id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Total:</label>
                            <input className="form-control" name="total" type="text" onChange={this.handleChange} value={this.state.form.total}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Description:</label>
                            <input className="form-control" name="description" type="text" onChange={this.handleChange} value={this.state.form.description}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Quantity:</label>
                            <input className="form-control" name="quantity" type="text" onChange={this.handleChange} value={this.state.form.quantity}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Unit Price:</label>
                            <input className="form-control" name="unitPrice" type="text" onChange={this.handleChange} value={this.state.form.unitPrice}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Sale Date:</label>
                            <input className="form-control" name="saleDate" type="text" onChange={this.handleChange} value={this.state.form.saleDate}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Customer Identification:</label>
                            <input className="form-control" name="identification" type="text" onChange={this.handleChange} value={this.state.form.identification}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Customer Name:</label>
                            <input className="form-control" name="nameClient" type="text" onChange={this.handleChange} value={this.state.form.nameClient}/>
                        </FormGroup>
                        <FormGroup>
                            <label> State: </label>
                            <select className="form-control" name="state" onChange={this.handleChange}>
                                <option value="" selected disabled hide style={{display:'none'}}></option>
                                <option value="In Process"> In Process </option>
                                <option value="Cancelled"> Cancelled </option>
                                <option value="Delivered"> Delivered </option>
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.modify(this.state.form)} > Modify </Button>
                        <Button color="danger" onClick={() => this.hideModalEdit()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Footer/>   
            </>
        );
    }
}

export default Sales;