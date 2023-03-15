import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

import AspectRatio from '@mui/joy/AspectRatio';
import { styled } from '@mui/joy/styles';
import mapbackground from '../../assets/mapback.png'
import Grid from '@mui/joy/Grid';
import Image from 'next/legacy/image'
import Box from '@mui/joy/Box';
import { useRef } from 'react'
import Script from 'next/script'
import Link from 'next/link'


export default function Homes() {
    const mapRef = useRef()
  return (
      <Box>
    <Grid container spacing={2} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', width: "1600px"}}>
    <Grid xs={6} sx={{ width: "50wh", height: "100vh", display: 'flex', alignItems: "center",}}>
        <Sheet
          sx={{
            width: "500px",
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Тавтай морил ! </b>
            </Typography>
          
          </div>
          <FormControl>
           
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="email ee oruulna uu"
            />
          </FormControl>
          <FormControl>
           
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="nuuts ygee oruulna uu"
            />
          </FormControl>
          <Link href="/map">
          <Button sx={{ mt: 1, backgroundColor: "black" }}>Нэвтрэх</Button>
          </Link>
          
        </Sheet>
     
    </Grid>
    <Grid xs={6} sx={{ width: "50wh", height: "100vh",  boxShadow: 'md'}}>
    <Box sx={{position:"relative", width: "100%", height: "100vh", objectFit: "fill"}}>
        <Image
          src={mapbackground}
          layout="fill"
          alt= "map"
        />
        <Box sx={{ position: "absolute", display:'flex',height:'100%', bottom: 20, right: 30, flexDirection: 'column', justifyContent: 'flex-end'}}>

        <Typography level="h4" component="h1"> Хязгааргүйн </Typography>
         <Typography> уудам руу </Typography>
         <Typography level="h4" component="h1"> Хамтдаа</Typography>
        </Box>
     </Box>
    </Grid>
  
  </Grid>

  
      </Box>
    
  );
}