import React from 'react';
import { Table } from 'react-bootstrap';

const ManageTours = () => {
    return (
        <div className="px-2 marginTop mb-5">
            <h1 className="pt-5">Manage All The Booking Tours</h1>
            <Table striped bordered hover variant="dark" className="my-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Tour</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <button className="btn btn-info me-3">Update</button>
                            <button className="btn btn-danger">Cancel</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageTours;