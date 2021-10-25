import React, { Component } from "react";
import axios from 'axios';

import "./../../App.css";
import "./../../styles/products.css";
import "bootstrap/dist/css/bootstrap.min.css";

import swal from "sweetalert";
import Header from "../../components/Header";
import ProductsForm from './ProductsForm';
import ProductsList from "./ProductsList";
import Footer from "../../components/Footer";
import { notLogged } from "../../miscellaneous/loginMessageHandler";
import { emptyDescription, emptyPrice, formatPrice, emptyState } from "../../miscellaneous/formValidations";

const data = [];

class Products extends Component {
  state = {
    data: data,

    form: {
      description: "",
      price: "",
      state: "",
    },

    modalinsert: false,
    modalEdit: false,
    alert: false,

    open: false,
    message: ''
  };

  URL_PRODUCTS = 'http://localhost:3001/products';

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

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  search = () => {
    var search = document.getElementById("search").value;
    var sales = this.state.data.filter(element => element._id === search || element.description === search)

    if (search === "") {
      this.setState({ open: true, message: 'Enter your search' });
      setTimeout(() => { window.location.reload(true); }, 700);
    }
    else if (sales.length === 0) {
      this.setState({ open: true, message: 'Sale not found' });
    }
    else {
      this.setState({ data: sales });;
      console.log(sales);
    }

  }

  modify = (dato) => {

    //dato.preventDefault();
    const list = this.state.form;
    if (list.price === '') {
      emptyPrice();
    } else if (isNaN(list.price)) {
      formatPrice();
    } else {
      console.log('vamos a hacer un PUT', this.state.form);
      axios.put(`${this.URL_PRODUCTS}/${dato._id}`, { ...dato }, {
        headers: {
          'token': sessionStorage.getItem('token')
        }
      }).then((resp) => {
        console.log('Todo bien con el put', resp);
        this.setState((state, props) => ({
          data: state.data.map(element => element._id === dato._id ? dato : element),
          modalEdit: false
        }))
        swal(
          "Successful Operation.",
          "Product: " + dato.description + ", was successfully modified.",
          "success"
        );
      }).catch(err => {
        console.log('error al hacer post', err);
      });
    }
  }

  // REQUEST GET HTTP

  componentDidMount() {
    axios.get(`${this.URL_PRODUCTS}`, {
      headers: {
        'token': sessionStorage.getItem('token')
      }
    })
      .then(res => {
        this.setState({ data: res.data })
      }).catch(err => {
        console.log("An error has ocurred", err);
      })
  };

  // REQUEST POST HTTP

  insert = () => {
    const datas = this.state.form;
    if (
      this.state.form.description === "") {
      emptyDescription();
    } else if (
      this.state.form.price === "") {
      emptyPrice();
    } else if (
      this.state.form.state === "") {
      emptyState();
    }
    else {
      var newValue = { ...this.state.form };
      var list = this.state.data;
      list.push(newValue);

      axios.post(`${this.URL_PRODUCTS}`, { ...datas }, {
        headers: {
          'token': sessionStorage.getItem('token')
        }
      })
        .then(res => {
          this.setState({
            modalinsert: false, data: list, alert: false
          })
          swal(
            "Successful Operation.",
            newValue.description + ", added successfully.",
            "success"
          )
            .then(() => {
              window.location.reload(true);
            })
        }).catch(err => {
          console.log("An error has ocurred: ", err);
        })

      let form = { ...this.state.form };
      form.description = ''; form.price = ''; form.state = '';
      this.setState({ form });
    }
  }

  delete = (dato) => {
    swal({
      title: "Delete Product",
      text: "Do yo want to remove product: " + dato.description + "?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`${this.URL_PRODUCTS}/${dato._id}`, {
            headers: {
              'token': sessionStorage.getItem('token')
            }
          }).then(resp => {
            this.setState((state, props) => ({
              data: this.state.data.filter(element => element._id !== dato._id)
            }))
          }).catch(err => {
            console.log('An error has ocurred: ', err);
          });
          swal("Product removed successfully.", {
            icon: "success",
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

          <ProductsList
            data={this.state.data}
            showME={this.showModalEdit}
            showMI={this.showModalInsert}
            delete={this.delete}
            form={this.state.form}
            alert={this.state.alert}
            search={this.search}
            open={this.state.open}
            handleClose={this.handleClose}
            message={this.state.message}
          />

          <ProductsForm
            insert={this.insert}
            modify={this.modify}
            hideMI={this.hideModalInsert}
            hideME={this.hideModalEdit}
            handleChange={this.handleChange}
            form={this.state.form}
            data={this.state.data}
            modalInsert={this.state.modalinsert}
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
export default Products;