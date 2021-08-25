import React, { useContext, useEffect, useState } from 'react';
import { addProductContext } from '../../context/ProductContext';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';
import ProductCard from './ProductCard';
import { FormControlLabel, Grid, FormControl, Radio, RadioGroup, Paper, Button } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({

    title: {
        textAlign: "center"
    },
    paper: {
        maxWidth: "1200px",
        width: '100%',
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "space-evenly",
    },
    sideBar: {
        margin: '0 20px 0 20px',
    },
    filterContainer: {
        maxWidth: "350px",
        margin: '0 auto'
    },
    filter: {
        display: 'flex',
        padding: '10px 10px',
        justifyContent: 'space-around'
    },
    paginationContainer: {
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center'
    },
    wrapper: {
        display: 'flex',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '10px'
    }
}));


const ProductList = () => {
    const { products, getProducts, deleteProduct, paginationPages, editProduct, filterProductsByPrice, favs } = useContext(addProductContext)
    const classes = useStyles();
    const history = useHistory();
    const [page, setPage] = useState(1);


    function getPage() {
        const search = new URLSearchParams(history.location.search)
        return search.get('_page')
    }

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', page);
        history.push(`${history.location.pathname}?_limit=3${search.toString()}`)
        setPage(page);
        getProducts(history)
    }
    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => { })

    function fetchProducts(params, value) {
        let search = new URLSearchParams(history.location.search)
        search.set(params, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getProducts(history)
    }

    function reset() {
        history.push('/catalog')
        getProducts(history)
    }

    function filterByPrice(value) {
        filterProductsByPrice(value)
    }

    return (
        <div>
            <div className={classes.filterContainer}>
                <Grid>
                    <Paper className={classes.sideBar}>
                        <div className={classes.filter}>
                            <Grid>
                                <FormControl component="fieldset">
                                    <h5>Категория</h5>
                                    <RadioGroup onChange={(e) => fetchProducts("category", e.target.value)} arial-label="category" name="category">
                                        <FormControlLabel value="Манга" control={<Radio />} label="Манга" />
                                        <FormControlLabel value="Комикс" control={<Radio />} label="Комикс" />
                                        <FormControlLabel value="Программирование" control={<Radio />} label="Программирование" />
                                        <FormControlLabel value="Геймдев" control={<Radio />} label="Геймдев" />
                                        <FormControlLabel value="Художественная" control={<Radio />} label="Художественная" />
                                        <FormControlLabel value="Артбуки" control={<Radio />} label="Артбуки" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid >
                                <FormControl component="fieldset">
                                    <h5>Цена</h5>
                                    <RadioGroup onChange={(e) => fetchProducts("price_lte", e.target.value)} arial-label="price" name="price1">
                                        <FormControlLabel value="250" control={<Radio />} label="250" />
                                        <FormControlLabel value="500" control={<Radio />} label="500" />
                                        <FormControlLabel value="750" control={<Radio />} label="750" />
                                        <FormControlLabel value="1000" control={<Radio />} label="1000" />
                                        <FormControlLabel value="3000" control={<Radio />} label="3000" />
                                        <FormControlLabel value="5000" control={<Radio />} label="5000" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button onClick={reset}>
                                Reset Filter
                            </Button>
                            <Link to='/favorites'>
                                <Button variant='contained' bg='secondary'>
                                    <h4
                                        style={{
                                            
                                            fontSize: "30px",
                                            background: "url(https://image.flaticon.com/icons/png/512/3237/3237429.png)"
                                        }}
                                    >
                                        {favs.products ? favs.products.length : 0}
                                    </h4>
                                    <img
                                        src='https://image.flaticon.com/icons/png/512/3237/3237429.png'
                                        alt=''
                                        style={{ height: "40px" }}
                                        
                                    />
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>
            </div>
            <h1 className={classes.title}>Каталог Книг</h1>
            <div className={classes.wrapper}>

                <Paper className={classes.paper}>
                    <ProductCard />
                </Paper>
            </div>
            <div className={classes.paginationContainer}>
                <Pagination count={paginationPages} page={page} onChange={handlePage} size="large" />
            </div>
        </div>
    );
};

export default ProductList;