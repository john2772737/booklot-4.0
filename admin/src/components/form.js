import React, { useState } from 'react'; // Import useState from React
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

function Form() { // Rename the function to start with an uppercase letter
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    position: '',
    email: '',
    birthday: '',
    phoneNumber: '',
    photo: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleFileInputChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

  
    try {
      await axios.post("http://localhost:4000/admin/createadmin", formData);
      console.log("Form data successfully submitted!");
      toast.success('submitted successfully!');

    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div><Toaster/></div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" name="position" value={formData.position} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Birthday:</label>
          <input type="date" name="birthday" value={formData.birthday} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
        </div>
        <div>
          <label>Photo:</label>
          <input type="file" accept="image/*" name="photo" onChange={handleFileInputChange} />
        </div>
        <button type="submit">Submit</button>
        
      </form>

    </div>
  );
}

export default Form;
