import React from 'react'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
//import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, useTheme, Typography} from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from '../../theme'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const AppSidebar = () => {
  const theme = useTheme()
  const colors =  tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
 
  return (
    <Box 
      sx={{ 
         "& .sidebar-inner": {
          background: `${colors.grey[900]}!important`
         },
         "& .icon-wrapper": {
          backgroundColor: "transparent !important"
         },
         "& .inner-item": {
          padding: "5px 35px 5px 20px !important"
         },
         "& .inner-item:hover": {
          color: "#868dfb !important"
         },
         "& .inner-item.active": {
          color: "#6870fa !important"
         }
    }}>

      <Sidebar collapsed={isCollapsed} backgroundColor={colors.primary[400]}>
        <Menu 
          iconShape="square"
          menuItemStyles={{
            button: {
             backgroundColor: `${colors.primary[400]} !important`,
             '&:hover': {
            backgroundColor: `${colors.primary[500]} !important`,
         }}}}
         >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.primary[300],
            }}
            
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]} sx={{ ml: "0px"}}>
                  Kaa Radaa
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/prof-pic.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography 
                  variant="h3" 
                  color={colors.grey[100]} 
                  fontWeight="bold" 
                  sx={{ m: "10px 0 0 0" }}
                  > 
                    George Gatuma 
                  </Typography>

                <Typography 
                  variant="h5"
                  color={colors.greenAccent[500]}>  Dev </Typography>
              </Box>
            </Box>)}

      <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
    </Menu>
    </Sidebar>
    </Box>
  )
}

export default AppSidebar