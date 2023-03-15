import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import DriverCard from '../component/Card';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddDriver from '@/component/AddDriver';


function Map() {
  const MapGoogle = dynamic(() => import("../component/MapGoogle"))
  const [isTrueDriver, setIsTrueDriver] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const drawer = (
    <div>
      <Toolbar />
      <ListItemText primary={"Бүтээгдэхүүний нэр"} />
      <Divider />
      <List>
            <ListItemButton
              onClick={() => setIsTrueDriver(false)}
              sx={[
                {
                  color: "white",
                  width: "100%",
                  borderColor: "#FFF",
                },
                isTrueDriver ? { borderLeft: 5 } : { borderLeft: 0 },
              ]}
            >
              <MailIcon /> 
              <ListItemText primary={"Явц харах"} />
            </ListItemButton>
            <ListItemButton
             onClick={() => setIsTrueDriver(true)}
             sx={[
               {
                 color: "white",
                 width: "100%",
                 borderColor: "#FFF",
               },
               isTrueDriver ? { borderLeft: 5 } : { borderLeft: 0 },
             ]}
            >
              <MenuIcon /> 
              <ListItemText primary={"Ажилчид"} />
            </ListItemButton>
       
      </List>
      <Divider />
      <List>
      <Link href="/home">
            <ListItemButton sx={{color:"white"}}>
              <InboxIcon /> 
              <ListItemText primary={"Гарах"} />
            </ListItemButton>
       </Link>
      </List>
      {isTrueDriver && (
      <Box flex={1.5} display="flex" flexDirection="column" bgcolor="#EEF1F4">
      </Box>)}
    </div>
  );
  return (
    <Box display='flex' bgcolor='#d9dddc' width='100vw' height='100vh'>
     <Box flex={1} display='flex' bgcolor='black' color="white">
       {drawer}
      </Box>
    
      {isTrueDriver && (
      <Box flex={1.7} display='flex' bgcolor="#d9ddc" padding={2} flexDirection="column" >
        <Box width={350} height={50} bgcolor="white" marginBottom={10} display="flex" justifyContent="center" alignItems="center"
   
        >
         <Button
              sx={{
                width: "80%",
                height: 50,
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                
                color: "#000",
              }}
              endIcon={
                <AddIcon
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: 1,
                    backgroundColor: "#EEF1F4",
                    color: "#707070",
                  
                  }}
                />
              }
              onClick={handleOpen}
            >
              Жолооч бүртгэх
              </Button>
        </Box>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddDriver/>
        
      </Modal>
        <DriverCard/>
      </Box>)}
      <Box flex={4.3} display='flex'>
        <MapGoogle/> 
      </Box>
    </Box>
    
  );
}



export default Map;