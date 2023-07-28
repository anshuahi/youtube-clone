import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (

    <Stack
      direction="row"
      p={2}
      alignItems={'center'}
      zIndex={5}

      sx={{ position: 'sticky', backgroundColor: '#000', top: 0, justifyContent: 'space-between', borderBottom:'1px solid white' }}>
        <Link to='/' style={{display:'flex', alignItems:'center'}}>
          <img src={logo} alt="logo" height={45}/>
          <h2 style={{color:'white', paddingLeft:'5px'}}>A Music</h2>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar