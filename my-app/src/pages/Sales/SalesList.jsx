import React, {Component} from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import {
    Table,
    Button,
    Alert,
    Container
} from 'reactstrap';

import swal from "sweetalert";

class SalesList extends Component {
    delete = (dato) => {
        swal({
            title: "Delete Sale?",
            text: "Are you sure to remove this register " + "<" + dato.description + ">" + " with id: " + dato.id + "?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                var cont = 0;
                var list = this.props.data;
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
    }

    render(){
        return(
            <React.Fragment>
                <br />
                <br />

                <div className="titulo">
                    <h3> Sales Management </h3>
                    <hr />
                </div>

                <Container className="box" style={{ marginBottom: '120px' }}>
                    <Alert isOpen={this.props.alert} color="warning">
                        Please complete all field.
                    </Alert>

                    <div className="flexbox-container">
                        <Button color="success" onClick={() => this.props.showMI()}> Register a New Sale </Button>
                        <div className="search">
                            <input type="text" placeholder="Search sales" />
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
                                <th> Id </th>
                                <th> Total </th>
                                <th> Description </th>
                                <th> Quantity </th>
                                <th> Unit Price </th>
                                <th> Sale Date </th>
                                <th> Customer Identification </th>
                                <th> Customer Name </th>
                                <th> State </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((element) => (
                                <tr>
                                    <td>{element.id}</td>
                                    <td>{element.total}</td>
                                    <td>{element.description}</td>
                                    <td>{element.quantity}</td>
                                    <td>{element.unitPrice}</td>
                                    <td>{element.saleDate}</td>
                                    <td>{element.identification}</td>
                                    <td>{element.nameClient}</td>
                                    <td>{element.state}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.props.showME(element)} > Edit </Button> {"  "}
                                        <Button color="danger" onClick={() => this.delete(element)} > Delete </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </React.Fragment>
        )
    }
}

export default SalesList;