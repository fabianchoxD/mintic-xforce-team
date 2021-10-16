import React, {Component} from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import {
    Table,
    Button,
    Alert,
    Container
} from 'reactstrap';

class ProductsList extends Component {

    render() {
        return(
            <React.Fragment>
                <br/><br/>
                <div className="titulo">
                    <h3> Product Management </h3>
                    <hr/>
                </div>

                <Container className="products"  style={{ marginBottom: '120px' }}>

                    <Alert isOpen={this.props.alert} color="warning">
                        Please complete all field.
                    </Alert>

                    <br />

                    <div className="flexbox-container">
                        <Button color="success" onClick={() => this.props.showMI()}>Add a New Product</Button>
                        <div className="search">
                            <input type="text" placeholder="Search products" />
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
                                <th>Id</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>State</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((element, i) => (
                                <tr key={i}> 
                                    <td>{element._id}</td>
                                    <td>{element.description}</td>
                                    <td>{element.price}</td>
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

export default ProductsList;