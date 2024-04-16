import React, { useEffect, useState } from "react";
import ResponsiveTable from "../../components/tables";
import axios from "axios";

function List_manager() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data
  useEffect(()=>{
    axios.get('http://localhost:4000/admin/listAdmin')
    .then(res=> setData(res.data))
    .catch(er => console.log(er))
  },[])

  console.log(data)

  const tableHeading = ['Name', 'Username', 'Position', 'Email', 'Birthday', 'Phone Number', 'Photo'];

  return (
    <div>
      <ResponsiveTable heading={tableHeading} dataa={data} />
    </div>
  );
}

export default List_manager;
