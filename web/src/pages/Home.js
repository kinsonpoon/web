import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenu from '../components/SideMenu';
import MainContent from '../components/MainContent';
import TopMenu from '../components/TopMenu';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));
function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <SideMenu />
            <MainContent />
            <TopMenu />
        </div>
    );
}

export default Home;