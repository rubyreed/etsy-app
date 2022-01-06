import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { Table, Header, Card, Divider, Container, Image, Button } from 'semantic-ui-react';
import products from "../images/Products.jpg";
import {Link} from "react-router-dom";

const ProductsWithSeller = ()=> {
  const {authenticated} = useContext(AuthContext);
  const [sellerProducts, setSellerProducts] = useState([])

	useEffect(()=>{
		getSellerProducts()
	},[])

	const normalizeData = (data)=>{
	  let	ids = data.map( i => i.seller_id) //goes through and finds ID for each thing in database(unique or not)
    let uniqueIDs = [... new Set(ids)]//makes sure all IDs are unique

		let normalizedData = uniqueIDs.map(unique_seller =>{
		let products =  data.filter( d=> d.seller_id === unique_seller) //finding all products for each individual seller
		let filterProducts = products.map(product=>{
				return {key: product.id, category: product.category, price: product.price, description:product.description}
		}) //here we take only the info that we want out of products
    
			return {
					name:  products[0].seller_name, //using first to be safe, don't know how many object there are in array
					email:  products[0].seller_email,
					products: filterProducts
			}
		}) //for each unique seller we want to grab these things
    return normalizedData
	};
  console.log(sellerProducts);

  const getSellerProducts = async ()=> {
    try {
			let res = await axios.get('/api/products')
			console.log(res.data)
			let normalizedData = normalizeData(res.data)
			setSellerProducts(normalizedData)
		} catch (error) {
			alert('error occured get sellerProducts')
		}
	}

  const renderRow = (products) => {
    return products.map((product) => {
      return(
      <Table.Row>
        <Table.Cell>{product.category}</Table.Cell>
        <Table.Cell>$ {product.price}</Table.Cell>
        <Table.Cell>{product.description}</Table.Cell>
      </Table.Row> )
    })
  }

  const renderSellerProducts = () => {
		return sellerProducts.map((seller) => {
		  return (
			<>
        <Card>
          <Card.Content>
            <Card.Header>{seller.name}</Card.Header>
            <Card.Meta>{seller.email}</Card.Meta>
          </Card.Content>
        </Card>
			  <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
    <Table.Body>
      {renderRow(seller.products)}
    </Table.Body>
  </Table>
  <Divider style={{marginTop:"50px", marginBottom:"50px"}}/>
			</>
		  );
		});
	  };

    if (authenticated){
  return (
    <Container>
      <Header style={{marginBottom:"50px", marginTop:"30px"}} as="h1">Products For Sale</Header>
    {renderSellerProducts()}
    </Container>
  )
}
return (
  <Container>
  <Image className="productsImage" src={products} alt="Ruby's Products" fluid/>
  <Header style={{margin:"50px", fontSize:"30px", textAlign:"right"}}>...would be here if you logged in!</Header>
  <Header style={{margin:"50px", fontSize:"30px", textAlign:"right"}}>
       <Button as={Link} to="/login" variant="text">Log In</Button> - or - <Button as={Link} to="/register" variant="text">Register</Button>
  </Header>
  </Container>
)
}

export default ProductsWithSeller;