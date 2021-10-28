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
import { declinedOperationResponse, modifiedItemResponse } from "../../miscellaneous/operationMsgResp";

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
                (swal(
                    "Error " + err.response.status,
                    err.response.data.errorMessage,
                    "error"
                ).then((result) => {
                    window.location = "/home"
                }
                ))
                return;
            })
        this.forceUpdate();
    };

    modify = (dato) => {
        const list = this.state.form;
        if (list.role === '') {
            swal(
                "Warning!",
                "Role field cannot be empty.",
                "warning"
            );
            return;
        } else if (list.state === '') {
            swal(
                "Warning!",
                "State field cannot be empty.",
                "warning"
            );
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
                    if(resp.data.currentUser === true && resp.data.data.role !== "Administrator"){
                        swal(
                            "Error!",
                            "You Don't have permission to see this resource",
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
                        }));swal("User removed successfully.", {
                        icon: "success",
                    }).then(() => {
                        if(resp.data.currentUser === true){
                            swal(
                                "Session ended.",
                                "Thanks for shop with us 😊",
                                "success"
                            ).then((result) => {
                                window.sessionStorage.removeItem('token');
                                this.props.history.push('/home');
                            });
                        }
                    })}).catch(err => {
                        (swal(
                            "Error " + err.response.status,
                            err.response.data.errorMessage,
                            "error"
                        ))
                        return;
                    });
                }
                else {
                    swal("Operation Declined.", {
                        icon: "success",
                    });
                }
            });
    }


    render() {
        if (window.sessionStorage.getItem('token') !== null) {
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
        } else
            return (
                notLogged(),
                null
            )
    }
}

export default Users;