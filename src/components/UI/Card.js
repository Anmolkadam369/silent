import React from 'react';

import './Card.css'

export default function Card (props){
    const classes = "card " + props.className
    console.log("myprops",props)
    console.log("propsesssssssssssss",props.children)
    return <div className={classes}>{props.children}</div>
}