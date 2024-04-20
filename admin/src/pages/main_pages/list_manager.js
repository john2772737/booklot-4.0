
import React, { useEffect, useState } from "react";
import ResponsiveTable from "../../components/tables";
import axios from "axios";
import ModalCom from "../../components/modal";
import Button from 'react-bootstrap/Button';

function List_manager() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/listAdmin")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const setlist = data.map((item) => [
    item.name,
    item.username,
    item.position,
    item.email,
    item.birthday,
    item.phoneNumber,
    item.photo,
    item.id   

    
  ]);

  const tableHeading = [
    "Name",
    "Username",
    "Position",
    "Email",
    "Birthday",
    "Phone Number",
    "Photo",
    "ID PHOTO"
  ];

 
const modalForm = [
  {
    controlId: "formName",
    type: "string",
    placeholder: "Enter name",
  },
  {
    controlId: "formUsername",
    type: "string",
    placeholder: "Enter username",
  },
  {
    controlId: "formPosition",
    type: "string",
    placeholder: "Enter position",
  },
  {
    controlId: "formEmail",
    type: "email",
    placeholder: "Enter email",
  },
  {
    controlId: "formBirthday",
    type: "date",
    placeholder: "Select birthday",
  },
  {
    controlId: "formPhoneNumber",
    type: "tel",
    placeholder: "Enter phone number",
  },
  {
    controlId: "formPhoto",
    type: "file",
    placeholder: "Upload photo",
  },
  {
    controlId: "formidPhoto",
    type: "file",
    placeholder: "Upload id photo",
  }
];

const footerValue=[
    <Button > Submit</Button>,
    <Button > Cancel</Button>
]


  return (
    

    <div>
      <button onClick={handleModalShow}>ADD</button>
      
      <ModalCom Title="Create Manager" body={modalForm}  show={modalShow} onHide={handleModalClose} footer={footerValue} />
     
      <ResponsiveTable heading={tableHeading} dataa={setlist} action={true} />
    </div>
  );
}

export default List_manager;
