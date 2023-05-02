import React from 'react'
import { AppBar,Toolbar,Typography,styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header= styled(AppBar)`
background: #111111

`
const Tabs=styled(Typography)`
font-size: 20px;
margin-right: 20px


`


function NavBar() {
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to="/" >Sonam</Tabs>
            <Tabs to="/all" >All users</Tabs>
            <Tabs to="/add" >Add user</Tabs>
        </Toolbar>
    </Header>
    
  )
}

export default NavBar
