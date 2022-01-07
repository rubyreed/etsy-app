import React, {useState, useEffect} from "react";
import { Header, Table, Divider, Container, Card } from "semantic-ui-react";
import axios from "axios";

const Categories = () => {
const [categories, setCategories] = useState([]);

useEffect(() => {
  console.log("mounted");
  getCategories();
},[]);

const normalizeData = (data)=>{
  let	categories = data.map( c => c.category) //goes through and finds category for each thing in database(unique or not)
  let uniqueCategories = [... new Set(categories)]//makes sure all categories are unique

  let normalizedData = uniqueCategories.map(unique_category =>{
  let products =  data.filter( d=> d.category === unique_category) //finding all products for each individual category
  let filterCategories = products.map(product=>{
      return {key: product.id, category: product.category, price: product.price, description:product.description}
  }) //here we take only the info that we want out of products
  
    return {
        category:  products[0].category, //using first to be safe, don't know how many object there are in array
        products: filterCategories
    }
  }) //for each unique seller we want to grab these things
  return normalizedData
};

const getCategories = async () => {
  try { 
  let response = await axios.get("/api/categories");
  let normalizedData = normalizeData(response.data)
  setCategories(normalizedData)
} 
  catch (error) {
  alert ('error occured getCategories')
}
};
console.log(categories)

const renderCategories = () => {
  return categories.map((category) => {
    return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{category.category}</Card.Header>
        </Card.Content>
      </Card>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
  <Table.Body>
    {renderRow(category.products)}
  </Table.Body>
</Table>
<Divider style={{marginTop:"50px", marginBottom:"50px"}}/>
    </>
    );
  });
  };

const renderRow = (data) => {
  return data.map((product) => {
    return(
    <Table.Row>
      <Table.Cell>$ {product.price}</Table.Cell>
      <Table.Cell>{product.description}</Table.Cell>
    </Table.Row> )
  })
}
  return (
    <Container>
    <Header as='h1' style={{marginBottom:'50px', marginTop:'30px'}}>Categories</Header>
    {renderCategories()}
    </Container>
  )
}

export default Categories;

