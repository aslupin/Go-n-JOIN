import React, { Component } from 'react';
import ModalBox from 'react-modal';
class Modal extends Component {
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          customStyles : {
            content : {
                border: '2px solid red',
                backgroundColor: 'blue',
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
          }
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
     
      openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
     
      closeModal()  {
          this.setState({modalIsOpen: false});
        }
       
        render() {
        return(
            <div>
            <button onClick={this.openModal}>Open Modal</button>
            <ModalBox
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={this.state.customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={subtitle => this.subtitle = subtitle}>NEW GROUP</h2>
              <form style = {{}}>
                <input style={{display:'flex'}}/>
                <input type="radio" value="public" name="public"/>public
                <input type="radio" value="public" name="public"/>public
              </form>
            </ModalBox>
          </div>
        
        )
    }
}

export default Modal;
