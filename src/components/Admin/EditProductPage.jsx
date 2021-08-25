import { Container, makeStyles, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { addProductContext } from '../../context/ProductContext';
import { Button } from 'react-bootstrap';


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


const EditProductPage = () => {
    
    const classes = useStyles();

    const {productToEdit, saveProduct} = useContext(addProductContext);
    const [newEditItem, setNewEditItem] = useState(productToEdit)
        useEffect(()=>{
            setNewEditItem(productToEdit)
        }, [productToEdit])

    function handleEditInput(e){
        let newProduct ={
            ...newEditItem,
        [e.target.name]:e.target.value,
        }
        setNewEditItem(newProduct)
    }
    return (
        <div>
            {newEditItem ?
            <>                    
            <Container className={classes.InputGrid}>

                    <Container className={classes.inputContainer}>
                    <TextField
                        name= "name"
                        required
                        id="outlined-brand"
                        label="Название книги"
                        variant="filled"
                        value={newEditItem.name}
                        onChange={handleEditInput}
                    />
                    <TextField
                        name= "pages"
                        required
                        id="outlined-desc"
                        label="Страниц в книге"
                        variant="filled"
                        value={newEditItem.pages}
                        onChange={handleEditInput}
                        />
                    <TextField
                        name="description"
                        required
                        id="outlined-desc"
                        label="Описание книги"
                        variant="filled"
                        value={newEditItem.description}
                        onChange={handleEditInput}
                        />
                    <NavLink to="/catalog">
                        <Button className={classes.addButton} onClick={()=>saveProduct(newEditItem)} variant="outline-primary">Изменить</Button>{' '}
                    </NavLink>
                    </Container>
                    <Container className={classes.inputContainer}>
                    <TextField
                        name="price"
                        required
                        id="outlined-price"
                        label="Цена книги"
                        variant="filled"
                        value={newEditItem.price} 
                        onChange={handleEditInput}
                        />
                    <TextField
                        name="image"
                        required
                        id="outlined-URL"
                        label="URL картинки книги"
                        variant="filled"
                        value={newEditItem.image}
                        onChange={handleEditInput}
                        />
                    <TextField
                        name="category"
                        id="outlined-select-category"
                        select
                        value={newEditItem.category}
                        onChange={handleEditInput}
                        helperText="Выберите нужный жанр книги"
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
                
            </>
            : <h1>LOADING...</h1>
            }
        </div>
    );
};

export default EditProductPage;