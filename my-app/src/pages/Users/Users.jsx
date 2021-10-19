import React, { Component } from "react";
import "./../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import swal from 'sweetalert';
import Header from '../../components/Header';
import UsersForm from './UsersForm';
import UsersList from "./UsersList";
import Footer from "../../components/Footer";
import { notLogged } from "../../miscellaneous/notLogged";

const data = [];

class Users extends Component {
    state = {
        data: data,

        form: {
            id: '',
            name: '',
            lastname: '',
            email: '',
            role: '',
            state: ''
        },

        modalinsert: false,
        modalEdit: false,
        alert: false
    };

    URL_USERS = 'http://localhost:3001/users';

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