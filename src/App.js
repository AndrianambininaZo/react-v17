import React, { useEffect, useState } from "react";
const getLocal=()=>{
  let carts=localStorage.getItem("carts");
  if (carts) {
    return(carts=JSON.parse(localStorage.getItem("carts")))
    
  }
  else{
    return[];
  }
}
export default function App() {
  const [nom, setNom]=useState('');
  const [qte, setQte]=useState('');
  const [cartes,setCarts]=useState(getLocal());
  console.log(cartes);

  const handlerSubmit=(e)=>{
    e.preventDefault();
    alert(qte)
    const data={
      nom:nom,
      prenom:qte
    }   
   
    setCarts([...cartes, data])  

  }
  useEffect(()=>{
    localStorage.setItem("carts",JSON.stringify(cartes));
  },[cartes])
  return (
    <div className="container">
        <form action="" onSubmit={handlerSubmit}>
          <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/>
          <input type="text" value={qte} onChange={(e)=>setQte(e.target.value)}/>
          <button type="Submit">Submit</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Qte</th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </table>
    </div>
  );
}
