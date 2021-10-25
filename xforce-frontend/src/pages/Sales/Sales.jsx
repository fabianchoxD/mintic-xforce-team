import React from "react";
import "./../../App.css";
import "./../../styles/Sales.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

import SalesForm from "./SalesForm";
import SalesList from "./SalesList";

import swal from 'sweetalert';
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import { notLogged } from "../../miscellaneous/loginMessageHandler";

const data = [];

class Sales extends React.Component {
  constructor(props){
    super(props);
  if(process.env.NODE_ENV !== 'production'){
    console.log("We're not ready to production yet.");
    require('dotenv').config();
  }
  this.BACKEND_URL = "https://xforce-mintic.herokuapp.com";
  };
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
    alert: false,

    open: false,
    message: ''
  };

  URL_SALES = `https://xforce-mintic.herokuapp.com/sales`


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

  handleClose = () => {
    this.setState({ open: false });
  };

  search = () => {
    var search = document.getElementById("search").value;
    var sales = this.state.data.filter(element => element._id === search || 
      element.identification.toString() === search || 
      element.nameClient === search)  
    
    if (search === "") {
      this.setState({ open: true, message: 'Enter your search' });
      setTimeout(()=>{window.location.reload(true);}, 700);
    }
    else if (sales.length === 0) {
      this.setState({ open: true, message: 'Sale not found' });
    }
    else {
      this.setState({data: sales});;
      console.log(sales); 
    }
    
  }

  modify = (dato) => {
    //dato.preventDefault();
    const list = this.state.form;
    if (list.total === '') {
      swal(
        "Warning!",
        "Total field cannot be empty.",
        "warning"
      );
      return;
    } else if (parseInt(list.total) !== list.total) {
      swal(
        "Warning!",
        "Only Numbers are available, please review.",
        "warning"
      );
    } else {
      console.log('vamos a hacer un PUT', this.state.form);
      axios.put(`${this.URL_SALES}/${dato._id}`, { ...dato }, {
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
          "Sales: " + dato.description + ", was successfully modified.",
          "success"
        );
      }).catch(err => {
        console.log('error al hacer post', err);
      });
    }
  }
  
  // REQUEST GET HTTP

  componentDidMount() {
    axios.get(`${this.URL_SALES}`, {
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
      this.state.form.total === "" ||
      this.state.form.unitPrice === "" ||
      this.state.form.quantity === "" ||
      this.state.form.description === "" ||
      this.state.form.saleDate === "" ||
      this.state.form.identification === "" ||
      this.state.form.nameClient === "" ||
      this.state.form.state === "" 
    ) {
      this.setState({ alert: true, modalInsert: false });
    }
    else {
      var newValue = { ...this.state.form };
      var list = this.state.data;
      list.push(newValue);

      axios.post(`${this.URL_SALES}`, { ...datas }, {
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
      form.total = ''; form.description = ''; form.unitPrice = ''; form.quantity = '';
      form.saleDate =''; form.identification = ''; form.nameClient = ''; form.state = '';
      this.setState({ form });
    }
  }

  delete = (dato) => {
    swal({
      title: "Delete Sales",
      text: "Do yo want to remove sale: " + dato.description + "?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`${this.URL_SALES}/${dato._id}`, {
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
          swal("Sale removed successfully.", {
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
                  <SalesList
                      data={this.state.data}
                      showME={this.showModalEdit}
                      showMI={this.showModalInsert}
                      form={this.state.form}
                      alert={this.state.alert}
                      delete={this.delete}
                      search={this.search}
                      open={this.state.open}
                      handleClose={this.handleClose}
                      message={this.state.message}
                  />

                  <SalesForm
                      insert={this.insert}
                      modify={this.modify}
                      hideMI={this.hideModalInsert}
                      hideME={this.hideModalEdit}
                      handleChange={this.handleChange}
                      form={this.state.form}
                      data={this.state.data}
                      modalInsert={this.state.modalInsert}
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

export default Sales;