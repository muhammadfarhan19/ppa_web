import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function Catalog() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://64c14d86fa35860baea05ea3.mockapi.io/restaurant/products')
        const data = await response.json();
        setData(data)
        return data;
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <div className="container catalog">
      <Navbar />
      <section className="catalog-section">
        {
          data.map(el => {
            return <Card key={el.id} name={el.name} imageUrl={el.imageUrl}/>
          })
        }
      </section>
    </div>
  );
}

export default Catalog;
