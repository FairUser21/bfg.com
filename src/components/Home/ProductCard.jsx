import React, { useContext, useEffect, useState } from 'react';
import { addProductContext } from '../../context/ProductContext';
import { Paper, IconButton } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/esm/Button';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(() => ({

  container: {

  },
  card: {
    maxWidth: "320px",
    maxHeight: "auto",
    backgroundColor: 'rgba(33,37,41, 1)',
    marginBottom: '30px'

  },
  cardTitle: {
    textAlign: 'center',
    color: "white",
  },
  cardPrice: {
    textAlign: 'center',
    color: 'white',
  },
  imgContainer: {
    // margin: '20px',
    maxWidth: "400px",
    maxHeight: "400px",
    // height: "100%",
  },
  bookImg: {
    maxWidth: "250px",
    maxHeight: "350px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    margin: '20px 0',
  },
  adminButtonsContainer: {
    display: "flex",
    justifyContent: "space-around",
    margin: "20px 0"
  },

}));


const ProductCard = () => {
  const { 
    products, 
    getProducts, 
    deleteProduct, 
    editProduct, 
    addProductToCart, 
    cart, 
    favs, 
    addProductToFavs,
    checkProductInFavs, 
  } = useContext(addProductContext)

  const [state, setState] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const classes = useStyles();
  const { currentUser, setCurrentUser } = useAuth()


  useEffect(() => {
    getProducts()
  }, [])
  function handleClick(id) {
    deleteProduct(id)
  }
  const checkItemInCart = (id) => {
    const foundItem = cart.products.find((product) => product.item.id === id);
    return foundItem ? 'secondary' : 'default';
  };



  return (
    <>
      
      {products.map(item => (
        
        <Paper elevation={3} className={classes.card}>
         
          <div className={classes.topSection}>
          <NavLink to={`/details/${item.id}`}>
            <Paper elevation={3} className={classes.imgContainer}>
              <img className={classes.bookImg} src={item.image} alt="" />
            </Paper>
            </NavLink>
          </div>
          <div className={classes.bottomSection}>
            <p className={classes.cardTitle}>
              <b><h5> {item.name}:</h5> {item.pages} стр.</b>
              <p>Жанр: {item.category}</p>
            </p>

            <p className={classes.cardPrice}>
              Цена: <b>{item.price}</b> Сом
            </p>
            <div className={classes.buttonContainer}>
              {
                currentUser ? (
                  <>
                    <Button variant="success" onClick={() => setModalShow(true)}>
                      Buy <AttachMoneyIcon />
                    </Button>
                    <IconButton
                      color={checkProductInFavs(item.id) ? "secondary" : ""}
                      onClick={() => addProductToFavs(item)}
                      aria-label='add to favs'
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </>
                ) : (<></>)
              }
              <Button variant="danger" onClick={() => addProductToCart(item)}>
                Add to Cart <AddShoppingCartIcon />
              </Button>
            </div>
            {
              currentUser ? (
                currentUser.email === 'admin@admin.com' ? (
                  <div className={classes.adminButtonsContainer}>
                    <button onClick={() => handleClick(item.id)}>Delete Item<DeleteIcon /></button>
                    <NavLink to="/edit">
                      <button onClick={() => editProduct(item.id)}>Edit Product<EditIcon /></button>
                    </NavLink>
                  </div>
                ) : (<></>)
              ) : (<></>)
            }
          </div>
          
        </Paper>
        
      ))}
      
      <PurchaseForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ProductCard;