import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    typo: {
        textAlign: 'center',
        marginTop: 200,
        fontSize: 100,
        fontWeight: 800,
        fontFamily: 'fantasy',
        letterSpacing: 30,
        color: '#fff',
        textShadow: '4px 4px 4px #000'
    }
});

const HomePage = () => {

    const classes = useStyles();

    return (
        <Typography className={classes.typo} variant="h3">WELCOME</Typography>
    );
};

export default HomePage;