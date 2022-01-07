import React, {useState, useEffect} from "react";
import { Header, Table, Divider, Container, Dropdown } from "semantic-ui-react";
import axios from "axios";

const Categories = () => {
const [categories, setCategories] = useState([]);

useEffect(() => {
  console.log("mounted");
  getCategories();
},[]);


const getCategories = async () => {
  let response = await axios.get("/api/categories");
  setCategories(response.data)
};
console.log(categories)

const renderRow = () => {
  return categories.map((category) => {
    return(
    <Table.Row>
      <Table.Cell>{category.category}</Table.Cell>
      <Table.Cell>$ {category.price}</Table.Cell>
      <Table.Cell>{category.description}</Table.Cell>
    </Table.Row> )
  })
}

  return (
    <Container>
    <Header>Categories</Header>
    <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
  <Table.Body>
    {renderRow()}
  </Table.Body>
</Table>
<Divider style={{marginTop:"50px", marginBottom:"50px"}}/>
    </Container>
  )
}

export default Categories;

