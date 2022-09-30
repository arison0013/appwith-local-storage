import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { environment } from "../../environment/environment";
// import { useForm } from "react-hook-form";

const Add = () => {
  let navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    type: "credit",
    amount: "",
    description: "",
  });

  const [amountError, setAmountError] = useState(false);
  const [descError, setDescError] = useState(false);

  const transferValue = (e) => {
    // e.preventDefault();
    // setFormErrors(validate(initialValues));
    // setIssubmit(true);
    // var stored = [];
    // let a = localStorage.getItem("students");
    // if (a) {
    //   stored = JSON.parse(localStorage.getItem("students"));
    // }
    // stored.push(initialValues);
    // localStorage.setItem("students", JSON.stringify(stored));

    let transactions = {
      type: initialValues.type,
      amount: initialValues.amount,
      description: initialValues.description,
    };
    axios.post(environment.apiUrl + "addtransaction", transactions,
      {
        headers: {
          'content-type': 'text-json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      },
    ).then(
      (response) => {
        console.log(response.data);
        navigate("/Home");
      },
      (error) => {
        console.log(error);
        alert("insuficient balance please enter correct amount");
      }
    );
  };

  const validate = () => {
    let Amount = initialValues.amount;
    let Desc = initialValues.description;
    let patten = /[a-zA-Z]/;
    if (Amount === "") {
      setAmountError(true);
    } else if (Amount == 0) {
      setAmountError(true);
    } else {
      setAmountError(false);
    }
    if (Desc === "") {
      setDescError(true)
    }
    else if (!Desc.match(patten)) {
      setDescError(true)
    } else {
      setDescError(false)
      if (Amount > 0) {
        transferValue();
      }
    }
  }


  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-left mb-4">New Transaction</h2>
        <form
        // onSubmit={
        //   (transferValue)
        // }
        >
          <div className="col-md-12 pb-4 d-inline-flex">
            <label className="col-md-4">Transaction Type:</label>
            <Form.Select
              className="selectBox"
              onChange={(e) =>
                setInitialValues({ ...initialValues, type: e.target.value })
              }
              value={initialValues.type}
            // name='typeof'
            // {...register("type")}
            >
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </Form.Select>
          </div>
          <p>{ }</p>
          <div className="col-md-12 pb-4">
            <label className="col-md-4">Amount:<span className="Span-color">*</span></label>
            <input
              type="number"
              onChange={(e) =>
                setInitialValues({ ...initialValues, amount: e.target.value })
              }
              value={initialValues.amount}
              className="getamount"
            // name='amountof'
            // {...register("amount")}
            ></input>
            <span className="Span-color">{amountError ? "Enter amount should be greater than 0" : ""}</span>
          </div>

          <div className="col-md-12 pb-4">
            <label className="col-md-4">Description:<span className="Span-color">*</span></label>
            <textarea
              onChange={(e) =>
                setInitialValues({
                  ...initialValues,
                  description: e.target.value,
                })
              }
              type="text"
              value={initialValues.description}
            // name='descof'
            // {...register("decription")}
            ></textarea>
            <span className="Span-color">{descError ? "Please enter description/aplhabets only" : ""}</span>
          </div>

          <div>
            <Button variant="primary" className="col ml-1" onClick={validate} >
              Save
            </Button>
            <Link to="/home">
              <Button variant="light" className="col mr-3" >Cancel</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
