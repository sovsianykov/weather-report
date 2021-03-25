
import * as React from 'react';
import { fetchWeather } from "../redux/operations/operations";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {makeStyles}from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import bg from '../assets/img/bg1.jpg'
import {Hourly} from "../components/Hourly";

const useStyles = makeStyles({
    root : {
        background : `url(${bg})`,
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
        marginTop: '10%'
    },
    text1 : {
        fontSize : 30,
        fontWeight : 300 ,
        color : "antiquewhite",
        textAlign : 'center',
        marginTop: 10
    },
    text2 : {
        fontSize : 25,
        fontWeight : 200 ,
        color : "antiquewhite",
        textAlign : 'center',
        marginTop: 10
    },


})


const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWeather())
    },[dispatch])


    const obj = useSelector( state =>state.weather.global)

    console.log(obj)
 let toDay =  (obj.data  )? obj.data.currentConditions :  8
    console.log(toDay)

    return (
        <Box>
            <main className={classes.root} >
               <Typography className={classes.title} variant='h1' >
                   t {toDay.temp}°C
               </Typography>
                <Typography className={classes.text1} variant='subtitle1' >
                  feells like  {toDay.feelslike}°C
                </Typography>
                <Typography className={classes.text2} variant='subtitle2' >
                    {toDay.conditions}
                </Typography>

               <Hourly obj={obj}/>
            </main>
        </Box>
    );
};
export default Home
