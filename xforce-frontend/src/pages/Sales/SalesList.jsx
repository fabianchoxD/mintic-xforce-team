import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Table, Button, Alert, Container } from "reactstrap";

class SalesList extends Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: "" };
    }
    changeTitle = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    render() {

        return (
            <React.Fragment>
                <br />
                <br />

                <div className="titulo">
                    <h3> Sales Management </h3>
                    <hr />
                </div>

                <Container className="sales" style={{ marginBottom: "120px", marginTop: "40px" }}>
                    <Alert isOpen={this.props.alert} color="warning">
                        Please complete all field.
                    </Alert>

                    <div className="flexbox-container">
                        <Button color="success" onClick={() => this.props.showMI()}>
                            {" "}
                            Register a New Sale{" "}
                        </Button>
                        <div className="search">
                            <input
                                type="text"
                                id="search"
                                name="search"
                                placeholder="Id, Cust Id, Name, Price..."
                                onChange={this.changeTitle}
                            />
                            <IconButton
                                aria-label="search"
                                style={{
                                    background: "rgb(45, 124, 214)",
                                    marginLeft: "6px",
                                    marginTop: "-8px",
                                }}
                            >
                                <SearchIcon sx={{ color: "white" }} />
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
                            {this.props.data.filter((val) => {
                                if (this.state.searchTerm === "") {
                                    return val
                                } else if (
                                    val._id.toString().toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                                    val.total.toString().toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                                    val.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                                    val.unitPrice.toString().toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                                    val.nameClient.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                                    val.state.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                                    val.identification.toString().toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                                    return val
                                }
                            }).map((element) => (
                                <tr>
                                    <td>{element._id}</td>
                                    <td>{element.total}</td>
                                    <td>{element.description}</td>
                                    <td>{element.quantity}</td>
                                    <td>{element.unitPrice}</td>
                                    <td>{element.saleDate}</td>
                                    <td>{element.identification}</td>
                                    <td>{element.nameClient}</td>
                                    <td>{element.state}</td>
                                    <td>
                                        <Button
                                            color="primary"
                                            onClick={() => this.props.showME(element)}
                                        >
                                            {" "}
                                            Edit{" "}
                                        </Button>{" "}
                                        {"  "}
                                        <Button
                                            color="danger"
                                            onClick={() => this.props.delete(element)}
                                        >
                                            {" "}
                                            Delete{" "}
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </React.Fragment>
        );
    }
}

export default SalesList;
