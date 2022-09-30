import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import moment from 'moment';
import Topbar from "../Layout/Topbar";
import { ToastContainer } from 'react-toastify';
import { environment } from "../../environment/environment";

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // var stored = localStorage.getItem("students")
        // if (stored != null) {
        //     var newObject = JSON.parse(stored);
        //     setData(newObject);
        // }
        axios.get(environment.apiUrl +'getAlltransaction',
            {headers: {
                'content-type': 'text-json',
                Authorization:`Bearer ${localStorage.getItem('token')}` 
            }}
            )
            .then(response => {
            // const gets = response.data;
            setData(response.data);
            // console.log("api hit", gets)
        })
    }, []);
    const tableRows = data.map((value, key) => {
        return (

            <tr key={key}>
                <td>{moment(value.date).format("DD-MM-yyyy LT")}</td>
                <td>{value.description}</td>
                <td>{value.type}</td>
                <td>{value.amount}</td>
                <td>{value.runningBalance}</td>
            </tr>
        )
    })

    // const addRows = (Data) => {
    //     // const totalEntry = data.length;
    //     const updatedEntry = [...data];
    //     updatedEntry.push(Data);
    //     setData(updatedEntry);
    // };

    // useEffect(() => {
    //     setData([
    //             { date: "Robert", amount: 23, type: "credit", description: "Full Stack(React + Java) Developer" },
    //             { date: "Michal", amount: 24, type: "Male", description: "Full Stack Engineer" },
    //             { data: "Morgan", amount: 24, type: "Female", description: "React Developer" },
    //             { date: "Tom", amount: 26, type: "Male", description: "Front End Developer" },
    //             { date: "Steve", amount: 27, type: "Female", description: "UI/UX Designer" }
    //           ])
    //    }, []);

    return (
        <>
            <div className="container">
                <div className="w-100">
                    <Topbar />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>RunningBalance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </Table>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Home;