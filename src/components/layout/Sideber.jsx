import {useState} from 'react'
import { navLinks } from '../navLinks'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { navManu } from '../navLinks/navManu'


const Sideber = () => {

  const [anchorER, setanchorER] = useState(null)
  const [open, setopen] = useState(false)

  const clickHendler = e =>{
    setanchorER(e.currentTarget)
    console.log(e.currentTarget)
    setopen(true)
  }

  const HeldleClose = e =>{
    setanchorER(null)
    setopen(false)
  }
 

  return (
    <>
      <Box component='div' className='text-white'>
        {navLinks.map((nav, i) => {
          return(
            <>
              <Button
              aria-owns={anchorER ? nav.title : undefined}
              aria-haspopup= {anchorER ? "true" : undefined}
               onMouseOver={(e) => clickHendler(e)} 
               color='inherit' variant="text">
                {nav.title}
              </Button>
            </>
          )
        })}

      </Box>
      {
        navLinks.map((manu, i) =>{
          return(
            <>
              <Menu id={manu.title} anchorEl={anchorER} open={open} onClick={HeldleClose} onMouseLeave={HeldleClose}>
                <MenuItem onClick={HeldleClose}>
                    Dashboard
                </MenuItem>
              </Menu>
            </>
          )
        })
      }
    </>
  )
}

export default Sideber