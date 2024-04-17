import React, { useEffect, useState } from "react";
import ResponsiveTable from "../../components/tables";
import axios from "axios";
import Table from "react-bootstrap/esm/Table";
import './/..//..//components/table.css'
function List_manager() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data
  useEffect(() => {
    axios.get('http://localhost:4000/admin/listAdmin')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  // Extracting data properties for each element in the data array
  const setlist = data.map(item => [
    item.name,
    item.username,
    item.position,
    item.email,
    item.birthday,
    item.phoneNumber,
    item.photo
  ]);
  
  const tableHeading = ['Name', 'Username', 'Position', 'Email', 'Birthday', 'Phone Number', 'Photo', ];

  return (
          <Table className='table w-50'>
          <ResponsiveTable heading={tableHeading} dataa={setlist} action={true} />
          </Table>
  );
}

export default List_manager;
