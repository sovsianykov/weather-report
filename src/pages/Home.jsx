
import * as React from 'react';
import Days from "./Days";
import Button from "@material-ui/core/Button";
import { fetchWeather } from "../redux/operations/operations";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWeather())
    },[dispatch])


    const obj = useSelector( state =>state.weather[0])
    console.log(  obj&&obj.currentConditions.temp)
    return (
        <div>
          <Days/>
          <Button type='button' variant='contained'   >Get Weather</Button>
        </div>
    );
};
export default Home