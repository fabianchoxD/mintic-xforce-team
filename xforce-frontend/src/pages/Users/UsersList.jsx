import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import {
    Table,
    Button,
    Container
} from 'reactstrap';

class UsersList extends Component {
    render() {
        return (
            <React.Fragment>
                <div
                    style={{
                        borderBottom: 'solid rgb(179, 179, 179) 1px',
                        marginTop: '7em',
                        width: '90%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'flex'
                    }}>

                    <h3> User Management </h3>

                    {/* <div style={{position: 'relative', top: '9px', marginLeft: '30px'}}>
                        <Breadcrumb tag="nav" listTag="div"> 
                            <BreadcrumbItem tag="a" href="/home"> Home </BreadcrumbItem>
                            <BreadcrumbItem tag="a" href="/sales"> Sales </BreadcrumbItem>
                            <BreadcrumbItem tag="a" href="/products"> Products </BreadcrumbItem>
                            <BreadcrumbItem active tag="span"> Users </BreadcrumbItem>
                        </Breadcrumb>
                    </div> */}
                </div>

                <div>
                
                </div>

                <Container className="users" style={{ marginBottom: '120px' }}>
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>State</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((element, i) => (
                                <tr key={i}>
                                    <td>{element._id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.role}</td>
                                    <td>{element.state}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.props.showME(element)} > Edit </Button> {"  "}
                                        <Button color="danger" onClick={() => this.props.delete(element)} > Delete </Button>
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

export default UsersList;
