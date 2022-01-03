import React from 'react'

function User({user}) {
    return (

<table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Email</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{user.email}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.password}</td>
    </tr>
    
  </tbody>
</table>

    )
}

export default User
