import React, { useContext, useState } from 'react'
import { addProductContext } from '../../context/ProductContext';

import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import ProductList from '../Home/ProductList';
import {Container, Grid, Paper} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';
import ProductCard from '../Home/ProductCard';

const useStyles = makeStyles(()=>({
    title:{
        textAlign: "center"
    },
    paperContainer:{
        maxWidth: "1200px",
        margin: "20px auto",
        padding: "20px 0"
    },
    inputContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems:"baseline",
        justifyContent:"space-around",
        margin: "0 auto",
        maxWidth: "1050px",
        minHeight: "250px"
    },
    InputGrid:{
        maxWidth: "800px",
        display: "flex",
        
    },  
}))

const categories = [
    {
        label:"Манга"
    },
    {
        label: 'Комикс',
    }, 
    {
        label: 'Программирование',
    },
    {
        label: 'Геймдев',
    },
    {
        label: 'Художественная',
    },
    {
        label: 'Артбуки',
    },
  ];

const AddProductPage = () => {
    const [inpName, setInpName] = useState('')
    const [inpPages, setInpPages] = useState('')
    const [inpDescription, setInpDescription] = useState('')
    const [inpPrice, setInpPrice] = useState('')
    const [inpImage, setInpImage] = useState('')
    const [inpCategory, setInpCategory] = useState('MTB')
    const  {addProduct} = useContext(addProductContext)
    function handleClick (){
        let newObj={    
            name:inpName,
            pages: inpPages,
            description: inpDescription,
            price: inpPrice,
            category: inpCategory,
            image: inpImage,
        }
        addProduct(newObj)
        setInpName('')
        setInpPages('')
        setInpDescription('')
        setInpPrice('')
        setInpImage('')
    }
    
    const classes = useStyles();

    return (
        <>
            <h1 className={classes.title}>Добавление книги в каталог</h1>
        <Paper className={classes.paperContainer}>
            <Container className={classes.InputGrid}>
                <Container className={classes.inputContainer}>
                    <TextField
                        required
                        id="outlined-brand"
                        label="Название книги"
                        variant="filled"
                        value={inpName}
                        onChange={(e) =>setInpName(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-desc"
                        label="Количество страниц"
                        variant="filled"
                        value={inpPages}
                        onChange={(e) =>setInpPages(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-desc"
                        label="Описание книги"
                        variant="filled"
                        value={inpDescription}
                        onChange={(e) =>setInpDescription(e.target.value)}
                    />
                    <Button className={classes.addButton} onClick={handleClick} variant="outline-primary">Добавить книгу в каталог</Button>{' '}
                </Container>
                <Container className={classes.inputContainer}>
                    <TextField
                        required
                        id="outlined-price"
                        label="Цена книги"
                        variant="filled"
                        value={inpPrice} 
                        onChange={(e) =>setInpPrice(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-URL"
                        label="URL картинки книги"
                        variant="filled"
                        onChange={(e) =>setInpImage(e.target.value)}
                    />
                    <TextField
                        id="outlined-select-category"
                        select
                        
                        value={inpCategory}
                        onChange={(e)=> setInpCategory(e.target.value)}
                        helperText="Выберите жанр книги"
                        variant="filled"
                        >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Container>
            </Container>
        </Paper>
            <ProductList/>
        </>
    );
};

export default AddProductPage;