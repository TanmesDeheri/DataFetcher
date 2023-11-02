import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Showdata({ data, onDelete , onEdit}) {
  return (
    <div style={{marginTop:'30px'}}>
    <Table striped bordered hover variant='dark'>
    <thead>
      <tr>
        <th>Sr.No</th>
        <th>Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item, index) => (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>@{item.username}</td>
          <td><button type="button" className="btn btn-outline-danger" onClick={()=>{onDelete(index)}}>Delete</button></td>
          <td><button type="button" className="btn btn-outline-warning"onClick={()=>{onEdit(index)}}>Edit</button></td>
        </tr>
         ))}
    </tbody>
  </Table>
    </div>
  )
}
