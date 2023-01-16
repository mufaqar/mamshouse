import axios from 'axios';
import React, { useEffect } from 'react'

const Success = () => {

//   useEffect(()=>{
//     var item_value = sessionStorage.getItem("item");
//     var items = JSON.parse(item_value)
//     console.log("🚀 ~ file: success.jsx:6 ~ useEffect ~ item_value", items)
    
// },[])

  const saveOrder=()=>{
    var item_value = sessionStorage.getItem("item");
    var items = JSON.parse(item_value)
    console.log("🚀 ~ file: success.jsx:6 ~ useEffect ~ item_value", items)
    const {title, getStartDate, getEndDate, totalprice} = items

    axios .post("/api/createOrder", {
      title,
      getStartDate,
      getEndDate,
      totalprice,
    })
    .then(function (response) {
      console.log("response", response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  saveOrder()

  return (
    <div className='mt-20'>Success</div>
  )
}

export default Success