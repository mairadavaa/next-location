import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import profileImage from "../../assets/coffee.jpg"
import { getUsers, createDriver, deleteDocument, getCollection } from '@/firebase/firebase.functions';
import { database } from '@/firebase';
import useCollection from '@/hook/useCollection';
export default function DriverCard() {
   const staffs = useCollection('staff');
  return (
    <Card sx={{ width: 350, height: 150, bgcolor: "white", display: "flex", flexDirection: "row", alignItems: "center"}}>
        <CardMedia
          component="img"
          height="100px"
          width="80px"
          image="/coffee.jpg"
          // image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gFmP7c2HKIRiof238lQjz2D1R8nKmYRscBqocjxF&s"
          alt="profile image"
        />
        <CardContent sx={{ width: "70%"}}>
          <Typography gutterBottom variant="h5" component="div">
           {staffs?.map((staff, idx) => (
             <div key={idx}>{staff.name}</div>
           ))}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {staffs?.map((staff, idx) => (
             <div key={idx}>{staff.email}</div>
           ))}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {staffs?.map((staff, idx )=> (
             <div key={idx}>{staff.phoneNumber}</div>
           ))}
            </Typography>
        <Button size="small" color="primary">
         idevxtei
        </Button>
        </CardContent>
    
      
    </Card>
  );
}