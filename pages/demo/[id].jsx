import { useRouter } from "next/router";
import React, { useEffect } from "react";
import axios from "axios";

export default function Id() {
  const router = useRouter();
  
  const id = router.query.id;
  const lang = router.query.lang;


  useEffect(() => {
     async function getSinglePost(){
          await axios
          .post("/api/getsinglepost", { id, lang })
          .then(function (response) {
            console.log(response.data);
            
          })
          .catch(function (error) {
            console.log(error);
          });
     }
     getSinglePost()
  });

  return <div className="mt-20">Id</div>;
}
