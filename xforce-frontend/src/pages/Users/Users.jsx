import React, { Component } from "react";
import "./../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import swal from 'sweetalert';
import Header from '../../components/Header';
import UsersForm from './UsersForm';
import UsersList from "./UsersList";
import Footer from "../../components/Footer";
import { lackOfPrivilegeHome, logoutMessage, lackOfPrivilegePending, lackOfPrivilegeSeller } from "../../miscellaneous/loginMessageHandler";
import { emptyRole, emptyState } from "../../miscellaneous/formValidations";
import { declinedOperationResponse } from "../../miscellaneous/operationMsgResp";

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
        role: '',
        modalinsert: false,
        modalEdit: false,
        alert: false
    };

    URL_USERS = `${process.env.REACT_APP_BACKEND_URL}/users`

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
    // REQUEST GET HTTP

    componentDidMount() {
        axios.get(`${this.URL_USERS}`, {
            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
            .then(res => {
                this.setState({ data: res.data })
            }).catch(err => {
                console.log("Error loading users: ", err)
            })
        if (sessionStorage.getItem("token") !== null) {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/afterLogin`, {
                headers: {
                    'token': sessionStorage.getItem('token')
                }
            })
                .then(res => {
                    this.setState({ role: res.data.role })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    };

    modify = (dato) => {
        const list = this.state.form;
        if (list.role === '') {
            emptyRole();
            return;
        } else if (list.state === '') {
            emptyState();
        } else {
            axios.put(`${this.URL_USERS}/${dato._id}`, { ...dato }, {
                headers: {
                    'token': sessionStorage.getItem('token')
                }
            }).then((resp) => {
                this.setState((state, props) => ({
                    data: state.data.map(element => element._id === dato._id ? dato : element),
                    modalEdit: false
                }))
                swal(
                    "Operation successful.",
                    "User: " + dato.name + ", was successfully updated.",
                    "success"
                ).then(() => {
                    if (resp.data.currentUser === true && resp.data.data.role !== "Administrator") {
                        swal(
                            "Error!",
                            "You Don't have permission to see this resourcEEEEEe",
                            "error"
                        ).then((result) => {
                            this.props.history.push('/home');
                        })
                    }
                })
            }).catch(err => {
                (swal(
                    "Error " + err.response.status,
                    err.response.data.errorMessage,
                    "error"
                ))
                return;
            });
        }
    }

    delete = (dato) => {
        swal({
            title: "Delete User",
            text: "Do yo want to remove User: " + dato.name + "?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`${this.URL_USERS}/${dato._id}`, {
                        headers: {
                            'token': sessionStorage.getItem('token')
                        }
                    }).then((resp) => {
                        this.setState((state, props) => ({
                            data: this.state.data.filter(element => element._id !== dato._id)
                        })); swal("User removed successfully.", {
                            icon: "success",
                        }).then(() => {
                            if (resp.data.currentUser === true) {
                                logoutMessage();
                            }
                        })
                    }).catch(err => {
                        (swal(
                            "Error " + err.response.status,
                            err.response.data.errorMessage,
                            "error"
                        ))
                    })}
                else {
                    declinedOperationResponse();
                }
            });
    }


    render() {
        if (sessionStorage.getItem('token') === null) {
            return (
                lackOfPrivilegeHome(),
                null)
        } else if (this.state.role === "Administrator" && sessionStorage.getItem('token') !== null) {
            return (
                <>
                    <Header />
                    <UsersList
                        data={this.state.data}
                        showME={this.showModalEdit}
                        delete={this.delete}
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
        } else if (this.state.role === "Seller") {
            return (
                lackOfPrivilegeSeller(),
                null
            )
        } else if (this.state.role === "Pending") {
            return (
                lackOfPrivilegePending(),
                null
            )
        } else
            return (
                null
            )
    }
}

export default Users;