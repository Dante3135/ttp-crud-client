import React from "react";
import "./styles/StudentView.css";
import { Link } from "react-router-dom";
import {
  StudentNameListContainer,
  AddStudentToCampusContainer,
} from "../containers";

const StudentView = (props) => {
  return (
    <>
      <img src={props.student.imageUrl} alt={props.student.name} />
      <h1>{props.student.firstName}</h1>
      <h3>{props.student.lastName}</h3>
      <h3>{props.student.email}</h3>
      <h3>{props.student.gpa}</h3>

 
      <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.student.id)}>
        Delete
      </button>
    </>
  );
};

export default StudentView;
