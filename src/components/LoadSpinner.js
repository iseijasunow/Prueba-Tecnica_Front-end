import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'src/store';


const LoadSpinner = () => {
const load = useSelector(state => state.cliente.loadData)
    return (
        <div class="spinner" style={{display: load ? "block" : "none"}}  >
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    );
};

export default LoadSpinner;
