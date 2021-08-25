import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { Button, Paper } from "@material-ui/core";
import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import DeleteIcon from "@material-ui/icons/Delete";
import ProductCard from "../Home/ProductCard";

const useStyles = makeStyles({
  tableMain: {
    width: "100vw",
    height: "100vh",
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "4.4rem",
  },
  textStyle: {
    width: "200px",
    margin: "0 auto",
    fontSize: "25px",
    fontFamily: '"Merienda"',
    color: "black",
  },
  tableResponsive: {
    overflowX: "auto",
  },

  tableCellImg: {
    width: "10vw",
    height: "30vh"
  },
  number: {
    width: "100px",
    height: "50px",
    backgroundColor: "rgba(255, 255, 255, .4)",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: '"Merienda"',
  },
  button: {
    fontSize: "20px",
    cursor: "pointer",
    color: "white",
    width: "70vw",
    borderRadius: "8px",
    border: "3px solid white",
    margin: "50px",
  },
});

export default function Favorites() {
  const classes = useStyles();
  const [count, setCount] = useState([]);
  const { favs, getFavs, changeFavsCount, deleteFavsProducts } = useProducts();

  useEffect(() => {
    getFavs();
  }, []);

  useEffect(() => {
    setCount();
  }, [favs]);
  console.log(favs);

  const handleFavsChange = (count, id) => {
    if (count <= 0) {
      count = 1;
      changeFavsCount(count, id);
    } else {
      changeFavsCount(count, id);
    }
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
      <div className={classes.tableMain}>
        <div className={classes.tableResponsive}>
          <div
            style={{
              display: "flex",
            }}
          >
            <th
              style={{
                color: "black",
                fontSize: "3vw",

                fontFamily: '"Merienda"',
                margin: "0 auto",
              }}
            >
              Favorite Books
            </th>
          </div>
          <table className={classes.table}>
            <thead>
              <tr>
                <th style={{ color: "black" }} className={classes.textStyle}>
                  Image
                </th>
                <th style={{ color: "black" }} className={classes.textStyle}>
                  Title
                </th>
                {/* <th style={{ color: "black" }} className={classes.textStyle}>
                  Price
                </th>
                <th style={{ color: "black" }} className={classes.textStyle}>
                  Count
                </th>
                <th style={{ color: "black" }} className={classes.textStyle}>
                  SubPrice
                </th> */}
                <th style={{ color: "black" }} className={classes.textStyle}>
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {favs?.products?.length > 0 &&
                favs.products.map((product) => (
                  <tr key={product.item.id}>
                    <td>
                      <img
                        className={classes.tableCellImg}
                        src={product.item.image}
                        alt={product.item.title}
                      />
                    </td>
                    <td className={classes.textStyle}>{product.item.name}</td>
                    <td>
                      <Button
                        onClick={() => deleteFavsProducts(product.item.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      </Paper>
    </div>
  );
}

