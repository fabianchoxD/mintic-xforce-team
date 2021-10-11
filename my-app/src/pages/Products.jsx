import React, { Component } from "react";
import "../App.css";
import "../styles/products.css";
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

import swal from "sweetalert";
import Header from "../components/Header";
import Footer from "../components/Footer";

const data = [];

class Products extends Component {
  state = {
    data: data,
    form: {
      id: "",
      description: "",
      price: "",
      state: "",
    },
    modalinsert: false,
    modalEdit: false,
    alert: false,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  showModalInsert = () => {
    this.setState({ modalinsert: true });
  };

  hideModalInsert = () => {
    this.setState({ modalinsert: false });
  };

  showModalEdit = (register) => {
    this.setState({ modalEdit: true, form: register });
  };

  hideModalEdit = () => {
    this.setState({ modalEdit: false });
  };

  insert = () => {
    if (
      this.state.form.description === "" ||
      this.state.form.price === "" ||
      this.state.form.state === ""
    ) {
      this.setState({ alert: true, modalinsert: false });
    } else {
      var newValue = { ...this.state.form };
      newValue.id = this.state.data.length + 1;
      var list = this.state.data;
      list.push(newValue);
      this.setState({ data: list, alert: false, modalinsert: false });
      swal(
        "Successful Operation.",
        newValue.description + ", added successfully.",
        "success"
      );
      this.state.form.description = "";
      this.state.form.price = "";
      this.state.form.state = "";
    }
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
    swal(
      "Successful Operation.",
      "The register with id: " + dato.id + ", was successfully modified.",
      "success"
    );
  };

  delete1 = (dato) => {
    swal({
      title: "Delete Product?",
      text:
        "Are you sure to remove this product " +
        "<" +
        dato.description +
        ">" +
        " con id: " +
        dato.id +
        "?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
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
  };

  render() {
    return (
      <>
        <Header />
        <br />
        <br />
        <div className="titulo">
          <h3> Product Management </h3>
          <hr />
        </div>
        <Container className="sales">


          <Alert isOpen={this.state.alert} color="warning">
            Please complete all field.
          </Alert>

          <br />

          <div className="flexbox-container">
            <Button color="success" onClick={() => this.showModalInsert()}>Add a New Product</Button>
            <div className="search">
              <input type="text" placeholder="Search products" />
              <IconButton
                aria-label="search"
                style={{
                  background: 'rgb(45, 124, 214)',
                  marginLeft: '6px',
                  marginTop: '-8px'
                }}
              >
                <SearchIcon sx={{ color: 'white' }} />
              </IconButton>
            </div>
          </div>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Price</th>
                <th>State</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((element) => (
                <tr>
                  <td>{element.id}</td>
                  <td>{element.description}</td>
                  <td>{element.price}</td>
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

        <Modal isOpen={this.state.modalinsert} style={{ marginTop: '80px' }}>
          <ModalHeader>
            <div>
              <h3>Add Products</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
            </FormGroup>
            <FormGroup>
              <label>Description:</label>
              <input className="form-control" name="description" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Price:</label>
              <input className="form-control" name="price" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label> State: </label>
              <select className="form-control" name="state" onChange={this.handleChange}>
                <option value="" selected disabled hide style={{ display: 'none' }}></option>
                <option value="Available"> Available </option>
                <option value="Unavailable"> Unavailable </option>
              </select>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => this.insert()}>insert</Button>
            <Button color="danger" onClick={() => this.hideModalInsert()}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEdit} style={{ marginTop: '80px' }}>
          <ModalHeader>
            <div>
              <h3>Modify Product</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.id} />
            </FormGroup>
            <FormGroup>
              <label>Description:</label>
              <input className="form-control" name="description" type="text" onChange={this.handleChange} value={this.state.form.description} />
            </FormGroup>
            <FormGroup>
              <label>Price:</label>
              <input className="form-control" name="price" type="text" onChange={this.handleChange} value={this.state.form.price} />
            </FormGroup>
            <FormGroup>
              <label> State: </label>
              <select className="form-control" name="state" onChange={this.handleChange} value={this.state.form.state}>
                <option value="" selected disabled hide style={{ display: 'none' }}></option>
                <option value="Available"> Available </option>
                <option value="Unavailable"> Unavailable </option>
              </select>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => this.modify(this.state.form)} > Modify </Button>
            <Button color="danger" onClick={() => this.hideModalEdit()}> Cancel </Button>
          </ModalFooter>
        </Modal>
        <Footer />
      </>
    );
  }
}
export default Products;