import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Home = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        // var stored = localStorage.getItem("students")
        // if (stored != null) {
        //     var newObject = JSON.parse(stored);
        //     setData(newObject);
        // }
        axios.get("http://localhost:8000/").then(response =>{
            const posts = response.data;
           
            setData(posts);
            console.log("api hit",posts)
        })
    }, []);

    const tableRows=data.map(item => {
        console.log("nkcnckcnk",item)
        return  <tr>
        <td>{item.Description}</td>
        <td>{item.Type}</td>
        <td>{item.Amount}</td>
    </tr>
      })

    // const tableRows = data.map((arison) => {
    //     return (
    //         <tr>
    //             <td>{arison.description}</td>
    //             <td>{arison.type}</td>
    //             <td>{arison.amount}</td>
    //         </tr>
    //     )
    // })

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
        <div className="container">
            <div className="w-100">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>Date</th> */}
                            <th>Description</th>
                            <th>Type</th>
                            <th>Amount</th>
                            {/* <th>RunningBalance</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Home;