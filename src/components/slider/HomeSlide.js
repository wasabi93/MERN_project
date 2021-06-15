import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, CardMedia } from '@material-ui/core'

import useStyles from '../../pages/home/styles';


export default function Slider(){
    const classes = useStyles()

    var items = [
        {
            url: 'https://www.purina.co.uk/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg',
            
        },
        {
            url: 'https://i.pinimg.com/originals/3f/85/c6/3f85c65d066f3736bcd495084604d940.jpg',
            
        }
    ]

    return (

        <Carousel className={classes.noPadding}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            
        </Carousel>
    )
}

function Item(props) {
    const classes = useStyles()
    
    return (   
        <Paper>
            <CardMedia
                image={props.item.url}
                component="img"
                height='250em'
                width='100%'  
            />
        </Paper> 
    )
}