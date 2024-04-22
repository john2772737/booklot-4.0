import React, { useEffect, useState } from "react";
import ResponsiveTable from "../../components/tables";
import axios from "axios";
import ModalCom from "../../components/modal";
import Button from "react-bootstrap/Button";
import { Toaster, toast } from "react-hot-toast";
import Container from "react-bootstrap/Container"; 
function List_manager() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    position: "",
    email: "",
    birthday: "",
    phoneNumber: "",
    photo: null,
  });
  const [required, setRequired] = useState({
    name: false,
    username: false,
    position: false,
    email: false,
    birthday: false,
    phoneNumber: false,
    photo: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value,
      };
      console.log("Updated FormData:", updatedFormData);
      return updatedFormData;
    });
    // Call the errorHandling function after updating formData
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:4000/admin/createadmin", formData);
      console.log("Form data successfully submitted!");
      toast.success("Submitted successfully!");
      handleModalClose();
    } catch (error) {
      if (error.response) {
        // Request was made and server responded with a status code that falls out of the range of 2xx
        console.error("Server responded with an error:", error.response.data);
        toast.error(`Server responded with an error: ${error.response.data}`);
      } else if (error.request) {
        // Request was made but no response was received
        console.error("No response received from server:", error.request);
        toast.error(
          "No response received from server. Please try again later."
        );
      } else {
        // Something else happened while setting up the request
        console.error(
          "An error occurred while sending the request:",
          error.message
        );
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  const setlist = data.map((item) => [
    item.name,
    item.username,
    item.position,
    item.email,
    item.birthday,
    item.phoneNumber,
    item.photo,
  ]);

  const tableHeading = [
    "Name",
    "Username",
    "Position",
    "Email",
    "Birthday",
    "Phone Number",
    "Photo",
  ];

  const [invalid, setInvalid] = useState({
    name: false,
    username: false,
    position: false,
    email: false,
    birthday: false,
    phoneNumber: false,
    photo: false,
  });

  const errorHandling = (fieldName) => {
    const namePattern = /^[a-zA-Z\s]+$/; // Regular expression to allow only letters and spaces
    const usernamePattern = /^[a-zA-Z0-9_]+$/; // Regular expression for username (letters, numbers, and underscore)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    const phonePattern = /^\d{10}$/; // Regular expression for 10-digit phone number
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Regular expression for date in yyyy-mm-dd format

    switch (fieldName) {
      case "name":
        if (!namePattern.test(formData.name)) {
          setInvalid((prevState) => ({ ...prevState, name: true })); // Update only the 'name' property of the invalid state
        } else {
          setInvalid((prevState) => ({ ...prevState, name: false }));
        }
        break;
      case "username":
        if (!usernamePattern.test(formData.username)) {
          setInvalid((prevState) => ({ ...prevState, username: true })); // Update only the 'username' property of the invalid state
        } else {
          setInvalid((prevState) => ({ ...prevState, username: false }));
        }
        break;
      case "email":
        if (!emailPattern.test(formData.email)) {
          setInvalid((prevState) => ({ ...prevState, email: true })); // Update only the 'email' property of the invalid state
        } else {
          setInvalid((prevState) => ({ ...prevState, email: false }));
        }
        break;
      case "phoneNumber":
        if (!phonePattern.test(formData.phoneNumber)) {
          setInvalid((prevState) => ({ ...prevState, phoneNumber: true })); // Update only the 'phoneNumber' property of the invalid state
        } else {
          setInvalid((prevState) => ({ ...prevState, phoneNumber: false }));
        }
        break;
      case "birthday":
        if (!datePattern.test(formData.birthday)) {
          setInvalid((prevState) => ({ ...prevState, birthday: true })); // Update only the 'birthday' property of the invalid state
        } else {
          setInvalid((prevState) => ({ ...prevState, birthday: false }));
        }
        break;
      // Add cases for other fields if needed
      default:
        break;
    }
  };

  const modalForm = [
    {
      name: "name",
      controlId: "formName",
      type: "text",
      placeholder: "Enter name",
      onChange: handleInputChange,
      onBlur: () => errorHandling("name"),
      errortext: "Invalid username",
      error: invalid.name, // Use specific invalid state for the "name" field
    },
    // Apply the same logic to other form controls

    {
      name: "username",
      controlId: "formUsername",
      type: "text",
      placeholder: "Enter username",
      onChange: handleInputChange,
      onBlur: () => errorHandling("username"),
      errortext: "Invalid username",
      error: invalid.username, // Use specific invalid state for the "name" field
    },
    {
      name: "position",
      controlId: "formPosition",
      type: "text",
      placeholder: "Enter position",
      onChange: handleInputChange,
      onBlur: () => errorHandling("position"),
      errortext: "Invalid position",
      error: invalid.position, // Use specific invalid state for the "name" field
    },
    {
      name: "email",
      controlId: "formEmail",
      type: "email",
      placeholder: "Enter email",
      onChange: handleInputChange,
      onBlur: () => errorHandling("email"),
      errortext: "Invalid email",
      error: invalid.email, // Use specific invalid state for the "name" field
    },
    {
      name: "birthday",
      controlId: "formBirthday",
      type: "date",
      placeholder: "Select birthday",
      onChange: handleInputChange,
      onBlur: () => errorHandling("birthday"),
      errortext: "Invalid birthday",
      error: invalid.birthday, // Use specific invalid state for the "name" field
    },
    {
      name: "phoneNumber",
      controlId: "formPhoneNumber",
      type: "tel",
      placeholder: "Enter phone number",
      onChange: handleInputChange,
      onBlur: () => errorHandling("phoneNumber"),
      errortext: "Invalid phone number",
      error: invalid.phoneNumber, // Use specific invalid state for the "name" field
    },
    {
      name: "photo",
      controlId: "formPhoto",
      type: "file",
      placeholder: "Upload photo",
      onChange: handleInputChange,
      onBlur: () => errorHandling("photo"),
      errortext: "Invalid photo",
      error: invalid.photo, // Use specific invalid state for the "name" field
    },
  ];

  const footerValue = [
    <Button key="submitBtn" onClick={handleSubmit}>
      Submit
    </Button>,
    <Button key="cancelBtn" onClick={handleModalClose}>
      Cancel
    </Button>,
  ];

  return (
    <Container fluid className="table-container">
      <div className="table-flex-container">
        {" "}
        {/* Add a wrapper with flex properties */}
        <Toaster />
        <button onClick={handleModalShow}>ADD</button>
        <ModalCom
          Title="Create Manager"
          body={modalForm}
          show={modalShow}
          onHide={handleModalClose}
          footer={footerValue}
        />
        <ResponsiveTable heading={tableHeading} dataa={setlist} action={true} />
      </div>
    </Container>
  );
}

export default List_manager;
