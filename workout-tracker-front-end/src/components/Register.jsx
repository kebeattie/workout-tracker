import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <Box sx={{display: 'flex', flexDirection:'column', alignItems:'center',justifyContent:'center',width: '300px', borderRadius: '10px', backgroundColor: 'white', padding: '5px',
        margin: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)'
      }}>
        
        <form method="post" action="/register.php">
          <Typography sx={{padding: '10px'}}variant ="h4" >Register</Typography>
          <TextField sx={{padding: '10px'}} name="firstName" id="firstName" type="text" label="First Name" variant="outlined" required/>
          <TextField sx={{padding: '10px'}} name="lastName" id="lastName" type="text" label="Last Name" variant="outlined" required/>
          <TextField sx={{padding: '10px'}} name="email" id="email" type="email" label="Email" variant="outlined" required/>
          <TextField sx={{padding: '10px'}} name="password" id="password" type="password" label="Password" variant="outlined" required/>
          <Button sx={{margin: '10px', padding: '5px', display: 'block'}} variant="contained" type="submit">Submit</Button>
          <Typography sx={{padding: '10px'}} variant="subtitle2">Have an account? <Link to='/login'>Sign in</Link></Typography>
        </form>
      </Box>
    </div>
  )
}

export default Register