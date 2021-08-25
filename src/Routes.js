import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./context/AuthContext"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Signup from "./components/Auth/Signup"
import Dashboard from "./components/Auth/Dashboard"
import Login from "./components/Auth/Login"
import PrivateRoute from "./components/Auth/PrivateRoute"
import ForgotPassword from "./components/Auth/ForgotPassword"
import UpdateProfile from "./components/Auth/UpdateProfile"

import AddProductPage from './components/Admin/AddProductPage';
import EditProductPage from './components/Admin/EditProductPage';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import ProductList from './components/Home/ProductList';
import ProductContextProvider from './context/ProductContext';
import Header from './components/Header/Header';
import Payment from './components/Payment/Payment';
import Footer from './components/Footer/Footer';


const Routes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
            <ProductContextProvider>
                    <Header />
                    <Switch>
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <PrivateRoute path="/update-profile" component={UpdateProfile} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                        
                        <Route exact path="/" component={Home} />
                        <Route path="/add" component={AddProductPage}/>
                        <Route path="/edit" component={EditProductPage}/>
                        <Route path="/cart" component={Cart}/>
                        <Route exact path="/catalog" component={ProductList}/>           
                        <Route exact path="/payment" component={Payment} />
                    </Switch>
                    <Footer />
            </ProductContextProvider>
            </AuthProvider>
        </BrowserRouter>
      
    );
};


export default Routes;