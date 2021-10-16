import React from "react";
import "./../../App.css";
import "./../../styles/Sales.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SalesForm from "./SalesForm";
import SalesList from "./SalesList";

import swal from 'sweetalert';
import Header from '../../components/Header';
import Footer from "../../components/Footer";

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

            this.setState({ alert: true, modalInsert: false });

        }
        else {
            var newValue = { ...this.state.form };
            newValue.id = this.state.data.length + 1;
            var list = this.state.data;
            list.push(newValue);
            this.setState({ data: list, alert: false, modalInsert: false });
            swal("Successful Operation.", newValue.description + ", added successfully.", "success");
            let form = { ...this.state.form };
            form.total = ''; form.description = ''; form.quantity = ''; form.unitPrice = ''; form.saleDate = '';
            form.identification = ''; form.nameClient = ''; form.state = '';
            this.setState({ form });
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

    render() {
        return (
            <>
                <Header />
                
                <SalesList
                    data = {this.state.data}
                    showME = {this.showModalEdit}
                    showMI = {this.showModalInsert}
                    form = {this.state.form}
                    alert = {this.state.alert}
                />

                <SalesForm
                    insert = {this.insert}
                    modify = {this.modify}
                    hideMI = {this.hideModalInsert}
                    hideME = {this.hideModalEdit}
                    handleChange = {this.handleChange}
                    form = {this.state.form}
                    data = {this.state.data}
                    modalInsert = {this.state.modalInsert}
                    modalEdit = {this.state.modalEdit}
                />
                
                <Footer />
            </>
        );
    }
}

export default Sales;