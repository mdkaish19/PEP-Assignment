import React from "react";
import "./Welcome.css"
const Welcome = ({ name, regNo }) => {
<style>
  .Welcome{
   
}

</style>

  return (
    <div style={{ display: "flex",
      justifyContent:"center",
      alignItems: "center",
      flexDirection: "column",
      background :"linear-gradient(to right,crimson,black)",
      color:"white",
      borderRadius:"10px",
      padding:"20px"
      }}>
      <h1>Hey! {name}</h1>
      <h2>Welcome to Lovely Profesional University</h2>
      <h2>You are doing great from your side 😊😊 </h2>
    </div>
  );
};


export default Welcome;