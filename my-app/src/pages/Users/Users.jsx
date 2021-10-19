import React, { Component } from "react";
import "./../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import swal from 'sweetalert';
import Header from '../../components/Header';
import UsersForm from './UsersForm';
import UsersList from "./UsersList";
import Footer from "../../components/Footer";
import { notLogged } from "../../miscellaneous/notLogged";

class Users extends Component {
    state = {

        registeredUsers: [
            { id: '1', name: 'Andrés', lastname: 'Díaz', role: 'Administrator', state: 'Authorized' },
            { id: '2', name: 'Fabián', lastname: 'Varón', role: 'Administrator', state: 'Authorized' },
            { id: '3', name: 'Karent', lastname: 'Manchabajoy', role: 'Administrator', state: 'Authorized' },
            { id: '4', name: 'Sebastián', lastname: 'Ortíz', role: 'Administrator', state: 'Authorized' },
            { id: '5', name: 'José', lastname: 'Cardona', role: 'Administrator', state: 'Authorized' },
            { id: '6', name: 'Juan', lastname: 'Gómez', role: '', state: 'Pending' },
            { id: '7', name: 'Steven', lastname: 'Hurtado', role: '', state: 'Pending' }
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
        var list = this.state.registeredUsers;
        console.log(list);
        list.map((register) => {
            if (dato.id === register.id) {
                list[cont].name = dato.name;
                list[cont].lastname = dato.lastname;
                list[cont].role = dato.role;
                list[cont].state = dato.state;
            }
            cont++;
        });
        this.setState({ registeredUsers: list, modalEdit: false });
        swal("Successful Operation.", "The register with id: " + dato.id + ", was successfully modified.", "success");
    }

    render() {
        if (window.sessionStorage.getItem('token') !== null) {
            return (
                <>
                    <Header />

                    <UsersList
                        data={this.state.registeredUsers}
                        showME={this.showModalEdit}
                    />
                    <UsersForm
                        modify={this.modify}
                        hideME={this.hideModalEdit}
                        handleChange={this.handleChange}
                        form={this.state.form}
                        modalEdit={this.state.modalEdit}
                    />

                    <Footer />
                </>
            )
        } else
            return (
                notLogged(),
                null
            )
    }
}

export default Users;