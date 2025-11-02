import { useEffect, useState } from "react";
import { createData, deleteData, editSave, getData } from "../services/AllApi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const Studentdetail = () => {

    const [inputVal, setinputVal] = useState({ name: "", course: "" ,grade:""});
    let[data,setData]=useState([])
    const[editData,seeditData]=useState("")

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      
    useEffect(()=>{
        getStud()
    },[])

    const createStud =async(reqBody)=>{
         reqBody = {
           name: inputVal.name,
           course: inputVal.course,
           grade: inputVal.grade,
         };
        let apiResponse=await createData(reqBody)
        console.log(apiResponse.data)
        getStud()
    }

    const getStud =async()=>{
        let apiResponse=await getData()
        console.log(apiResponse.data)
        setData(apiResponse.data)
    }
    
   const deleteStud =async(id)=>{
    let apiResponse=await deleteData(id)
    console.log(apiResponse)
    getStud()
   }

   const oneditClick=(data)=>{
    console.log(data)
    seeditData(data)
    setShow(true)
   }

   const oneditSave =async()=>{

    let reqBody={
      name:editData.name,
      course:editData.course,
      grade:editData.grade
    }
    let apiResponse = await editSave(editData.id,reqBody);
    console.log(apiResponse)
    getStud()
    setShow(false);
   }

  return (
    <div>
      <div className="card text-center">
        <div className="card-header" style={{ backgroundColor: "black" }}>
          <h1 style={{ fontFamily: "Monoton, sans-serif", color: "white" }}>
            STUDENT &nbsp; MANAGEMENT &nbsp; APPLICATION
          </h1>
        </div>
        <div className="card-body" style={{ backgroundColor: "#37353E" }}>
          <label htmlFor="Name">Name: </label>&nbsp;
          <input
            className="dark-input"
            type="text"
            id="Name"
            onChange={(e) => setinputVal({ ...inputVal, name: e.target.value })}
          ></input>
          <br />
          <br />
          <label htmlFor="Course">Course: </label>&nbsp;
          <input
            className="dark-input"
            type="text"
            id="Course"
            onChange={(e) =>
              setinputVal({ ...inputVal, course: e.target.value })
            }
          ></input>
          <br />
          <br />
          <label htmlFor="Grade">Grade : </label>&nbsp;
          <input
            className="dark-input"
            type="text"
            id="Grade"
            onChange={(e) =>
              setinputVal({ ...inputVal, grade: e.target.value })
            }
          ></input>
          <br />
          <br />
          <button type="button" className="btn btn-dark" onClick={createStud}>
            Add Student
          </button>
          <table className="table table-dark table-striped mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>COURSE</th>
                <th>GRADE</th>
                <th>OPERATIONS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((eachdata) => (
                <tr key={eachdata.id}>
                  <td>{eachdata.id}</td>
                  <td>{eachdata.name}</td>
                  <td>{eachdata.course}</td>
                  <td>{eachdata.grade}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteStud(eachdata.id)}
                    >
                      Delete
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => oneditClick(eachdata)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="bg-dark">
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Edit Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <label htmlFor="editname" style={{ color: "white" }}>
            Name:
          </label>
          <input
            value={editData.name}
            type="text"
            className="form-control"
            id="editname"
            onChange={(e) => seeditData({ ...editData, name: e.target.value })}
          />
          <br />
          <label htmlFor="editcourse" style={{ color: "white" }}>
            Course:
          </label>
          <input
            value={editData.course}
            type="text"
            className="form-control"
            id="editcourse"
            onChange={(e) =>
              seeditData({ ...editData, course: e.target.value })
            }
          />
          <br />
          <label htmlFor="editgrade" style={{ color: "white" }}>
            Grade:
          </label>
          <input
            value={editData.grade}
            type="text"
            className="form-control"
            id="editgrade"
            onChange={(e) => seeditData({ ...editData, grade: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={oneditSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Studentdetail