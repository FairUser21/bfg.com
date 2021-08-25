import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { useProducts } from "../../context/ProductContext";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import ProductComments from "./ProductComments";



const useStyles = makeStyles((theme) => ({
  back: {
    width: "100%",
    height: "300vh",

  },
  root: {
    flexGrow: 1,
    width: "100%",
  },
  paper: {
    marginTop: "4.4rem",
    backgroundColor: "rgba(255, 255, 255, .4)",
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "80%",
  },
  img: {
    marginTop: "4rem",
    margin: "auto",
    display: "block",
    height: "35vw",
    width: "35vw",
  },
  main_container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  detailsFont: {
    fontFamily: '"Merienda"',
  },
}));

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();
  const classes = useStyles();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div className={classes.back}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid className={classes.main_container} container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt='BOOK'
                  src={productDetails.image}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  <Typography
                    variant='h3'
                    component='h2'
                    className={classes.detailsFont}
                  >
                    {productDetails.title}
                  </Typography>
                  <Typography
                    variant='h4'
                    component='h2'
                    className={classes.detailsFont}
                  >
                    Жанр: {productDetails.category}
                  </Typography>
                  <Grid item>
                    <Typography variant='h6' component='h2'>
                      {productDetails.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant='h3' component='h2'>
                  {productDetails.price} сом
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <div style={{ marginTop: "35vh" }}>
            <ProductComments />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProductDetails;