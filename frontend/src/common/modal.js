import React, { Component } from 'react';
import styled from 'styled-components'
class Modal extends Component {
    render (){
        const Btn = styled.div`

        `
        const Popup = styled.div`
            background-color: red;
            width: 70px;
            height: 20px;
        `
        const ModalContent = styled.div`
            background-color: #fefefe;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
        `

        const Close = styled.div`
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        `
        return(
        <div>
            <Btn>Open</Btn>
            <Popup>
                <ModalContent></ModalContent>
                <Close>close</Close>
            </Popup>
        </div>
        
        )
    }
}

export default Modal;
