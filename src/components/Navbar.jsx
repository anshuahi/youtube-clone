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
      sx={{ position: 'sticky', backgroundColor: '#000', top: 0, justifyContent: 'space-between' }}>
        <Link to='/' style={{display:'flex', alignItems:'center'}}>
          <img src={logo} alt="logo" height={45}/>
          <h2>A Music</h2>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar