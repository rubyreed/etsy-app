import React, { useEffect, useState } from "react";
import axios from "axios";
import {List, SearchCategory, Table} from "semantic-ui-react";

const Products_With_Seller = ()=> {
  const [products, setProducts] = useState ([]);


  useEffect(() => {
    const getProducts = async () => {
      let response = await axios.get (`/api/products`)
      setProducts(response.data)
      console.log(response.data)
    };

    console.log("mounted");
    getProducts();

  },[])

  const renderProducts = () => {
    if (products.length === 0) {
      return <p>No Products</p>
    }
    return products.map((product) => {
      return (<p key = {product.product_id}> {product.product_id}{product.category} {product.price} {product.description} {product.seller_id}{product.seller_name}{product.seller_email}
      </p>)
    })
  }
  
  
  return (
    <div>
      <h1>Products</h1>
    {renderProducts()}
    </div>
  )
}

export default Products_With_Seller;