import React, { useEffect, useState } from "react";
import BackNavbar from "./BackNavbar";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Test() {
  const [date, setDate] = useState();
  const [appointment, setAppointment] = useState({
    p_id: "P101",
    firstName:"Sanket",
    lastName:"Supekar",
    gender:"Male",
    phoneNo:"9130420859",
    d_id: "D101",
    name:"Dr. Ramdev Baba",
    h_id: "H101",
    hospitalName:"Patanjali Hospital",
    appoDateTime: new Date(),
    createDate: new Date(),
    appoStatus: "Pending",
    appoMessage :"",
  });

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(appointment);
  }

  return (
    <>
      <BackNavbar />
      <div style={{ marginTop: "7rem" }}>
        <div className="input-group w-50 border p-5 mt-5 m-auto shadow-sm p-3 mb-5 bg-body rounded">
          <form
            className="d-flex justify-content-center m-auto flex-column w-75"
            onSubmit={handleOnSubmit}
          >
            <h2 className="mb-5">Appointment Form</h2>
            {/* {isLoading ? (
            <div className="d-flex align-items-center mb-5 m-auto ">
              <strong>Loading...</strong>
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          ) : (
            <div></div>
          )} */}

            <div className="d-flex flex-row mb-4">
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="firstName">
                  Patient Name
                </label>
                <input
                  type="text"
                  id="p_id"
                  className="form-control"
                  value={appointment.firstName +" "+appointment.lastName}
                  // onChange={(e) =>
                  //   setAppointment({
                  //     ...appointment,
                  //     [e.target.id]: e.target.value,
                  //   })
                  // }
                  // placeholder={"Enter Name"}
                  // minLength={4}
                  // maxLength={4}
                  readOnly
                />
              </div>
            </div>

            <div className="d-flex flex-row mb-4">
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="firstName">
                  Doctor Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={appointment.name}
                  // onChange={(e) =>
                  //   setAppointment({
                  //     ...appointment,
                  //     [e.target.id]: e.target.value,
                  //   })
                  // }
                  // placeholder={"Enter Name"}
                  // minLength={4}
                  // maxLength={4}
                  // required

                  readOnly
                />
              </div>
            </div>

            <div className="d-flex flex-row mb-4">
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="firstName">
                  Hospital Name
                </label>
                <input
                  type="text"
                  id="hospitalName"
                  className="form-control"
                  value={appointment.hospitalName}
                  // onChange={(e) =>
                  //   setAppointment({
                  //     ...appointment,
                  //     [e.target.id]: e.target.value,
                  //   })
                  // }
                  // placeholder={"Enter Name"}
                  // minLength={4}
                  // maxLength={4}
                  // required
                  readOnly
                />
              </div>
            </div>

            <div className="d-flex flex-row mb-4">
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="firstName">
                  Select Time
                </label>
                <DatePicker
                //  showIcon
                  id="appoDateTime"
                  onChange={(date) =>
                    setAppointment({
                      ...appointment,
                      appoDateTime: date,
                    })
                  }
                  selected={appointment.appoDateTime}
                  className="form-control"
                  showTimeSelect
                  timeCaption="Slot"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 7)}
                />
              </div>
            </div>

            <div className="d-flex flex-row mb-4">
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="firstName">
                  Message
                </label>
                <textarea 
                  type="text"
                  id="appoMessage"
                  className="form-control"
                  value={appointment.appoMessage}
                  onChange={(e) =>
                    setAppointment({
                      ...appointment,
                      [e.target.id]: e.target.value,
                    })
                  }
                  placeholder={"Enter Message"}
                  minLength={5}
                  maxLength={500}
                  rows={4}
                  required
                />
              </div>
            </div>


            <button type="submit" className="btn btn-dark align-self-center">
              Book Appointment
            </button>
            {/* <div className="d-flex flex-col mt-3 justify-content-center">
            <p className="pe-2">Don't have an account?</p>
            <Link to="/patientRegister" className="text-decoration-none">
              <a className="nav-link active" aria-current="page">
                Sign Up
              </a>
            </Link>
          </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
