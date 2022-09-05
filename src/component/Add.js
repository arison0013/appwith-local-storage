import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
 import { useNavigate } from "react-router-dom";

const Add = () => {
   let navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    type: "",
    amount: "",
    description: "",
  });

  const transferValue = (event) => {
    event.preventDefault();
    // var stored = [];
    // let a = localStorage.getItem("students");
    // if (a) {
    //   stored = JSON.parse(localStorage.getItem("students"));
    // }
    // stored.push(initialValues);
    // localStorage.setItem("students", JSON.stringify(stored));

    let transactions = {
      type:initialValues.type,
      amount:initialValues.amount,
      description:initialValues.description
    };
    axios.post("http://localhost:8000/add-transaction", transactions).then(
      (response => {
        console.log(response.data)
        navigate('/')
      }),
      
    );

    // console.log(transactions);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-left mb-4">New Transaction</h2>
        <form>
          <div className="col-md-12 pb-4 d-inline-flex">
            <label className="col-md-4">Transaction Type:</label>
            <Form.Select
              className="selectBox"
              onChange={(e) =>
                setInitialValues({ ...initialValues, type: e.target.value })
              }
            >
              <option value="">please select...</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </Form.Select>
          </div>
          <div className="col-md-12 pb-4">
            <label className="col-md-4">Amount:</label>
            <input
              type="number"
              onChange={(e) =>
                setInitialValues({ ...initialValues, amount: e.target.value })
              }
              value={initialValues.amount}
            ></input>
          </div>
          <div className="col-md-12 pb-4">
            <label className="col-md-4">Description:</label>
            <textarea
              onChange={(e) =>
                setInitialValues({
                  ...initialValues,
                  description: e.target.value,
                })
              }
              type="text"
              value={initialValues.description}
            ></textarea>
          </div>
        </form>
        <div>
          <Button
            variant="primary"
            className="col-pr-4"
            onClick={transferValue}
            type="submit"
          >
            Save
          </Button>
          <Link to="/">
            {" "}
            <Button variant="light">Cancel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Add;
