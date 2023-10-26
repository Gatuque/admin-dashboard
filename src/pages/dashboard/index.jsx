import React from 'react'
import { Box, Typography } from '@mui/material'
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Header title="DASHBORD" subtitle="Welcome to Kaa Radaa Client Portal" />
        </Box>
    </Box>
  )
}

export default Dashboard