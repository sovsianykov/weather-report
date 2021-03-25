
import * as React from 'react';
import {Box, makeStyles, Paper, Typography} from "@material-ui/core";
const useStyles = makeStyles({
    root : {
        borderTop : " 2px solid antiquewhite ",
        textAlign : 'right',
        width : "345px ",
        height : 40,
        background : "transparent",
        margin : "30px auto"
    },


})



export function Hourly() {
  const  classes = useStyles()
    return (
        <Box>
            <Paper className={classes.root}>
                <Typography variant='subtitle1' >

                </Typography>

            </Paper>


        </Box>
    );
}
