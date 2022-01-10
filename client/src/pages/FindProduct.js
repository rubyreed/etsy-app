import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Header, Dropdown, Table } from "semantic-ui-react";

const FindProduct = () => {
  const [sellers, setSellers] = useState([])
  const [sellerOptions, setSellerOptions] = useState([])
  const [buyers, setBuyers] = useState([])
  const [buyerOptions, setBuyerOptions] = useState([])
  const [products, setProducts] = useState([])


  useEffect(()=> {
    getSellers()
  },[])

  const getSellers = async () => {
     try { let res = await axios.get('/api/sellers')
      setSellers(res.data)
      renderSellerOptions(res.data)
    } catch (error) {
      alert('error setSellers')
    }
  }

  const renderSellerOptions = (sellerOps) => {
      let array = sellerOps.map((seller) => {
          return { key:seller.id, text:seller.name, value:seller.id}
        })
      setSellerOptions(array)
  };

  async function sellerOnChange(value) {
    setBuyerOptions([])
    setProducts([])
		// axios call to get sellers' buyers
		try{
		let res = await axios.get(`/api/sellers/${value}`)
		setBuyers(res.data)
    renderBuyerOptions(res.data)
		} catch(err){
			alert('err sellerOnChange')
		}
	} 
   async function buyerOnChange(value) {
     setProducts([])
		// axios call to get buyers' products
		try{
		let res = await axios.get(`/api/buyers/${value}`)
		setProducts(res.data)
		} catch(err){
			alert('err')
		}
	}

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <Table.Row key={product.id}>
          <Table.Cell>{product.category}</Table.Cell>
          <Table.Cell>$ {product.price}</Table.Cell>
          <Table.Cell>{product.description}</Table.Cell>
        </Table.Row>
      )
    })
  };

  const renderBuyerOptions = (buyerOps) => {
    let array = buyerOps.map((buyer) => {
        return { key:buyer.id, text:buyer.name, value:buyer.id}
      })
    setBuyerOptions(array)
};

  return (
    <Container>
      <Header as ="h1">Find Product</Header>
      <Header as = "h3">Select a Seller</Header>
      <Dropdown
        onChange = {(e,{value})=> sellerOnChange(value)}
        placeholder='Select Seller'
        fluid
        selection
        options={sellerOptions}
  /> {buyers.length > 0 &&
    <>
      <Header as = "h3">Select a Buyer</Header>
       <Dropdown
        onChange = {(e,{value})=> buyerOnChange(value)}
        placeholder='Select Buyer'
        fluid
        selection
        options={buyerOptions}
  /> </>} 
 {products.length > 0 &&
 <>
 <Header>Products</Header>
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {renderProducts()}
    </Table.Body>
  </Table>
  </>}
</Container>
  )
}

export default FindProduct;