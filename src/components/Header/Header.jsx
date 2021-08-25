import React, {useState, useEffect} from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { useAuth } from '../../context/AuthContext';
import { addProductContext } from '../../context/ProductContext';
import './Header.css'

const Header = () => {
	const history = useHistory()
	const { currentUser } = useAuth()
	const {getProducts, products} = useContext(addProductContext)
	
	const handleValue = (e) => {
		const search = new URLSearchParams(history.location.search);		
		search.set('q', e.target.value);
		history.push(`${history.location.pathname}?${search.toString()}`);
		getProducts();
	  };
    
	
	return (
	<>
		<Navbar bg="danger" expand="lg" variant="dark">
			<Container className="d-flex justify-content-space-between">
				<Navbar.Brand href="#home"  className="brand" style={{ fontSize: 35 }}>
					<Nav><Link to="/" className="nav-link" role="button">
						Books For Geek
					</Link></Nav> 
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto"></Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Введите для поиска"
							className="mr-2"
							aria-label="Search"
							onChange={(e) => handleValue(e)}
						/>
						<Button variant="outline-light" p="l-5">Поиск</Button>
					</Form>
					<Nav
						className="my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>

						<Nav><Link to="/catalog" className="nav-link" role="button">Каталог</Link></Nav>
						<Nav><Link to="/cart" className="nav-link" role="button">Корзина</Link></Nav>
						<Nav><Link to="/dashboard" className="nav-link" role="button">Профиль</Link></Nav>
						{
							currentUser ? (
								currentUser.email === 'admin@admin.com' ? (
									<>
									<Button variant="outline-warning" bg="dark"><Link to="/add" className="nav-link" role="button">Добавить</Link></Button>
									</>
								) : (<></>)
							) : (<></>)
						}
					</Nav>

				</Navbar.Collapse>
			</Container>
		</Navbar>
	</>
	);
};

export default Header;


