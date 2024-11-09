import axios from "axios";
import React, { useEffect, useState } from "react";
import Experts1 from "./Experts1";
import Expert from "./Expert";

const Experts2 = () => {
  const [experts, setExperts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/experts2");
      setExperts(res.data);
    };
    fetchData();
  }, []);
  console.log(experts);
  return <Expert experts={experts}></Expert>;
};

export default Experts2;
