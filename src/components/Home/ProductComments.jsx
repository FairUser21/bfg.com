import { makeStyles, TextField, Button, Fade } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { CircularProgress, IconButton } from "@material-ui/core";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import SaveIcon from "@material-ui/icons/Save";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper_modal: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    color: "#e8c271",
    borderRightColor: "#FFF",
  },
  input__label: {
    color: "#f2e49d",
    borderRightColor: "#FFF",
  },
}));

const ProductComments = () => {
  const { getProductDetails, productDetails, history, editProduct } =
    useProducts();
  const { currentUser } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, [id]);
  const [product, setProduct] = useState(productDetails);
  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);
  const classes = useStyles();
  const [comment, setComment] = useState({});
  const handleInput = (e) => {
    if (productDetails) {
      let d = new Date(Date.now());
      d.toString();
      setComment({
        user: currentUser.email,
        commit: e.target.value,
        // date: d.toISOString()
        time: new Date().toLocaleString(),
      });
      console.log(comment);
    }
  };
  const sendComment = async (e, id, productos) => {
    e.preventDefault();

    let newComment = [...productos.comments];
    newComment.push(comment);
    let productWithComment = {
      ...productos,
      comments: newComment,
    };
    const data = await editProduct(id, productWithComment);
    setProduct(productWithComment);
    e.target.value = "";
  };
  const deleteComment = async (index, id, productos) => {
    let deletedComment = [...productos.comments];
    const del = deletedComment.splice(index, 1);
    let productWithoutComment = {
      ...productos,
      comments: deletedComment,
    };
    const data = await editProduct(id, productWithoutComment);
    setProduct(productWithoutComment);
  };
  const editComment = async (index, id, productos) => {
    handleClose();
    let editedComment = [...productos.comments];
    console.log(index);
    const del = editedComment.splice(index, 1, comment);
    let productWithEditedComment = {
      ...productos,
      comments: editedComment,
    };
    const data = await editProduct(id, productWithEditedComment);
    setProduct(productWithEditedComment);
  };
  const whoIsAuthor = (commentixx) => {
    if (currentUser && commentixx.user === currentUser.email) {
      return true;
    } else {
      return false;
    }
  };
  const marginOfComment = (commentixx) => {
    if (whoIsAuthor(commentixx)) {
      return {
        marginLeft: "40%",
        maxWidth: "50%",
      };
    } else {
      return {
        maxWidth: "70%",
      };
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {productDetails ? (
        <div className='flex flex-col  bg-gray-800 text-3xl'>
          <p className='text-3xl text-indigo-800 py-10 bg-white'>COMMENTS</p>
          <div className=' py-5 bg-gray-800'>
            {product ? (
              product?.comments?.map((item, index) => (
                <div style={marginOfComment(item)}>
                  <div className='grid grid-cols-12'>
                    
                    <div className='my-5 col-span-11 '>
                      <p className='text-indigo-500 leading-none text-2xl'>
                        {console.log(item.user)}
                        {item.user}
                        <span className='text-gray-600 text-xl mx-5'>
                          {item.time}
                        </span>
                      </p>
                      <p className='text-black text-xl'>{item.commit}</p>
                    </div>
                  </div>
                  {whoIsAuthor(item) ? (
                    <button
                      onClick={() => deleteComment(index, product.id, product)}
                      style={{
                        transform: "scale(0.7)",
                        color: "#f7a15f",
                        backgroundColor: "#3d2740",
                        borderRadius: "5px",
                      }}
                    >
                      delete
                    </button>
                  ) : (
                    <></>
                  )}
                  {whoIsAuthor(item) ? (
                    <button
                      type='button'
                      onClick={() => handleOpen()}
                      style={{
                        transform: "scale(0.7)",
                        color: "#f7a15f",
                        backgroundColor: "#3d2740",
                        borderRadius: "5px",
                      }}
                    >
                      edit
                    </button>
                  ) : (
                    <></>
                  )}
                  <Modal
                    aria-labelledby='spring-modal-title'
                    aria-describedby='spring-modal-description'
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className={classes.paper_modal}>
                        <TextField
                          variant='outlined'
                          label='Edit Comment'
                          color='secondary'
                          style={{ width: "420px" }}
                          onChange={(e) => handleInput(e)}
                        />
                        <Button
                          type='submit  '
                          edge='end'
                          aria-label='account of current user'
                          aria-haspopup='true'
                          color='inherit'
                          onClick={(e) =>
                            editComment(index, product.id, product)
                          }
                        >
                          <SaveIcon color='white' />
                        </Button>
                      </div>
                    </Fade>
                  </Modal>
                </div>
              ))
            ) : (
              <></>
            )}

            <div className=' flex h-screen bg-gray-800 justify-center items-center'>
              <div className='w-1/2 bg-white p-2 pt-4 rounded'>
                <div className='mt-3 p-3 w-full'>
                  <input
                    name='commit'
                    className='border p-2 rounded w-full text-xl'
                    onChange={(e) => handleInput(e)}
                    placeholder='Write something...'
                  />
                </div>
                <div className='flex justify-between mx-3'>
                  <div>
                    <button
                      onClick={(e) => sendComment(e, product.id, product)}
                      className='px-4 py-1 bg-gray-800 text-white text-xl rounded font-light hover:bg-gray-700'
                    >
                      Submit
                    </button>
                  </div>
                  <div>
                    <a href='#'>...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default ProductComments;