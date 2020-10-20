import React from 'react';
import './Admin.css';
import logo from '../../logos/logo.png';

const Admin = () => {
    return (

        <div className="container-fluid" >
            <div className="row admin-navbar">

                <div className="col-md-3">
                    <a className="navbar-brand" href="/home">
                        <img src={logo} alt="" />
                    </a>

                    <ul className="dashboard-menu ">
                        <li><a href="/admin">Volunteer register list</a></li>
                        <li><a href="/addEvent">Add event</a></li>
                    </ul>

                </div>

                <div className="col-md-9" style={{ height: '100vh', background: '#F4F7FC' }}>
                    <h3>Volunteer register list</h3>

                    <div className="bg-white p-5">
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Registration date</th>
                                    <th scope="col">Volunteer list</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Mark Andre</th>
                                    <td>Mark@gmail.com</td>
                                    <td>19/10/2020</td>
                                    <td>Organized Books at the library.</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Jacob tok</th>
                                    <td>Jacob@gmail.com</td>
                                    <td>19/10/2020</td>
                                    <td>Organized Books at the library.</td>
                                    <td><button className="btn btn-danger">Delete</button></td>

                                </tr>
                                <tr>
                                    <th scope="row">Larry jack</th>
                                    <td>Larry@gamil.com</td>
                                    <td>19/10/2020</td>
                                    <td>Organized Books at the library.</td>
                                    <td><button className="btn btn-danger">Delete</button></td>

                                </tr>
                                <tr>
                                    <th scope="row">Eamma Watson</th>
                                    <td>Emma@gamil.com</td>
                                    <td>19/10/2020</td>
                                    <td>Organized Books at the library.</td>
                                    <td><button className="btn btn-danger">Delete</button></td>

                                </tr>
                                <tr>
                                    <th scope="row">Selena Gomez</th>
                                    <td>Selena@gamil.com</td>
                                    <td>19/10/2020</td>
                                    <td>Organized Books at the library.</td>
                                    <td><button className="btn btn-danger">Delete</button></td>

                                </tr>
                                <tr>
                                    <th scope="row">John Smith</th>
                                    <td>John@gamil.com</td>
                                    <td>19/10/2020</td>
                                    <td>Organized Books at the library.</td>
                                    <td><button className="btn btn-danger">Delete</button></td>

                                </tr>
                                <tr>
                                    <th scope="row">Alan Walker</th>
                                    <td>Alan@gamil.com</td>
                                    <td>19/10/2020</td>
                                    <td>Organized Books at the library.</td>
                                    <td><button className="btn btn-danger">Delete</button></td>

                                </tr>
                                <tr>
                                    <th scope="row">Justin Beiber</th>
                                    <td>Justin@gamil.com</td>
                                    <td>19/10/2020</td>
                                    <td>Organized Books at the library.</td>
                                    <td><button className="btn btn-danger">Delete</button></td>

                                </tr>
                                <tr>
                                    <th scope="row">Linkin Park</th>
                                    <td>Linkin@gamil.com</td>
                                    <td>19/10/2020</td>
                                    <td>Organized Books at the library.</td>
                                    <td><button className="btn btn-danger">Delete</button></td>

                                </tr>
                                <tr>
                                    <th scope="row">Alka Yagnik</th>
                                    <td>Alka@gamil.com</td>
                                    <td>19/10/2020</td>
                                    <td>Organized Books at the library.</td>
                                    <td><button className="btn btn-danger">Delete</button></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Admin;