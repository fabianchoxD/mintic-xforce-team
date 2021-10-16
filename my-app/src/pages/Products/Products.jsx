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

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  modify = (dato) => {

    //dato.preventDefault();
    const list = this.state.form;
    if (list.price === '') {
      swal(
        "Warning!",
        "Price field cannot be empty.",
        "warning"
      );
      return;
    } else if (parseInt(list.price) != list.price) {
      swal(
        "Warning!",
        "Only Numbers are available, please review.",
        "warning"
      );
    } else {
      console.log('vamos a hacer un PUT', this.state.form);
      axios.put(`${this.URL_PRODUCTS}/${dato._id}`, { ...dato }).then((resp) => {
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
    axios.get(`${this.URL_PRODUCTS}`)
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
      this.state.form.description === "" ||
      this.state.form.price === "" ||
      this.state.form.state === ""
    ) {
      this.setState({ alert: true, modalinsert: false });
    }
    else {
      var newValue = { ...this.state.form };
      var list = this.state.data;
      list.push(newValue);

      axios.post(`${this.URL_PRODUCTS}`, { ...datas })
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
          console.log("An error has ocurred", err);
        })

      let form = { ...this.state.form };
      form.description = ''; form.price = ''; form.state = '';
      this.setState({ form });
    }
  }

  render() {
    return (
      <>
        <Header />

        <ProductsList
          data={this.state.data}
          showME={this.showModalEdit}
          showMI={this.showModalInsert}
          form={this.state.form}
          alert={this.state.alert}
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
    );
  }
}
export default Products;