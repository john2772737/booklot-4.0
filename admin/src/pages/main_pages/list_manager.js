import React, { useEffect, useState } from "react";
import Tables from "..//..//components/tables";
import axios from "axios";

function List_manager() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/admin/listAdmin");
      setData(response.data); // Update data state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  };

  // useEffect to fetch data when component mounts
  useEffect(() => {
    getData();
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  
  return (
    <div>

  </div>
  );
}

export default List_manager;
