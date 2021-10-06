import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
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
import Header from './Header';
import Footer from "./Footer";

const data = [];

class ventas extends React.Component {
    state = {
        data: data,
        form: {
            id: '',
            producto: '',
            precio: '',
            cantidad: ''
        },
        modalInsertar: false,
        modalEditar: false,
        alerta: false
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    mostrarModalInsertar = () => {
        this.setState({ modalInsertar: true });
    }

    ocultarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    }

    mostrarModalEditar = (registro) => {
        this.setState({ modalEditar: true, form: registro });
    }

    ocultarModalEditar = () => {
        this.setState({ modalEditar: false });
    }

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ data: lista, modalInsertar: false });
        swal("Operación exitosa.", valorNuevo.producto + ", añadido satisfactoriamente.", "success");
    }

    modificar = (dato) => {
        var contador = 0;
        var lista = this.state.data;
        lista.map((registro) => {
            if (dato.id === registro.id) {
                lista[contador].producto = dato.producto;
                lista[contador].precio = dato.precio;
                lista[contador].cantidad = dato.cantidad;
            }
            contador++;
        });
        this.setState({ data: lista, modalEditar: false });
        swal("Operación exitosa.", "El registro con id: " + dato.id + ", se modificó satisfactoriamente.", "success");
    }

    eliminar = (dato) => {
        swal({
            title: "¿Eliminar producto?",
            text: "¿Está seguro que desea borrar el producto: " + dato.producto + " con id: " + dato.id ,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    var contador = 0;
                    var lista = this.state.data;
                    lista.map((registro) => {
                        if (registro.id === dato.id) {
                            lista.splice(contador, 1);
                        }
                        contador++;
                    });
                    this.setState({ data: lista });
                    swal("Registro eliminado con éxito.", {
                        icon: "success",
                    });
                } else {
                    swal("Operación no realizada.");
                }
            });
    }
    render() {
        return (
            <>
                <Header />
                <Container className="ventas">
                    <br />

                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Añadir un nuevo producto</Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.producto}</td>
                                    <td>{elemento.precio}</td>
                                    <td>{elemento.cantidad}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.mostrarModalEditar(elemento)} >Editar</Button> {"  "}
                                        <Button color="danger" onClick={() => this.eliminar(elemento)} >Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalInsertar} >
                    <ModalHeader>
                        <div>
                            <h3>Añadir Producto</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.state.data.length+1} />
                        </FormGroup>
                        <FormGroup>
                            <label>Producto:</label>
                            <input className="form-control" name="producto" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Precio:</label>
                            <input className="form-control" name="precio" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Cantidad:</label>
                            <input className="form-control" name="cantidad" type="text" onChange={this.handleChange} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.insertar()}>Insertar</Button>
                        <Button color="danger" onClick={() => this.ocultarModalInsertar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEditar} >
                    <ModalHeader>
                        <div>
                            <h3>Modificar Producto</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.state.form.id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Producto:</label>
                            <input className="form-control" name="producto" type="text" onChange={this.handleChange} value={this.state.form.producto} />
                        </FormGroup>
                        <FormGroup>
                            <label>Precio:</label>
                            <input className="form-control" name="precio" type="text" onChange={this.handleChange} value={this.state.form.precio} />
                        </FormGroup>
                        <FormGroup>
                            <label>Cantidad:</label>
                            <input className="form-control" name="cantidad" type="text" onChange={this.handleChange} value={this.state.form.cantidad} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.modificar(this.state.form)} >Modificar</Button>
                        <Button color="danger" onClick={() => this.ocultarModalEditar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
                <Footer/>   
            </>
        );
    }
}

export default ventas;