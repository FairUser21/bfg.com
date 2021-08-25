import React from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const PurchaseForm = (props) => {
    
        return (
        <Modal
            show={props.show}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Заполните ваши данные для оплаты
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">ФИО</InputGroup.Text>
                    <FormControl
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl

                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                        Город
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text>Адрес</InputGroup.Text>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Индекс</InputGroup.Text>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>+996</InputGroup.Text>
                    <FormControl aria-label="Amount (to the nearest dollar)" placeholder="Телефонный номер" />
                </InputGroup>

            </Modal.Body>
            <Modal.Footer>
                <Link to="/payment">
                    <Button onClick={props.onHide}>
                        Оплатить покупку 
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
};

export default PurchaseForm;