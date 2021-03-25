
import * as React from 'react';
import Days from "./Days";
import Button from "@material-ui/core/Button";
import { fetchWeather } from "../redux/operations/operations";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {makeStyles}from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root : {
        background : 'blue',
        width : "100%",
        height : "100vh",
        position: 'absolute',
        top : '0'
    },
    title : {
        fontSize : 100,
        fontWeight : 200 ,
        color : "antiquewhite",
        textAlign : 'center',
        marginTop: '20%'
    }


})


const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWeather())
    },[dispatch])


    const obj = useSelector( state =>state.weather.global)

    console.log(obj)
 let temp =  (obj.data  )? obj.data.currentConditions.temp :  8
    console.log(temp)

    return (
        <Box>
            <main className={classes.root} >
               <Typography className={classes.title} variant='h1' >
                   t {temp}°C
               </Typography>
            </main>
        </Box>
    );
};
export default Home