import React, { Component } from 'react';
import Auxilary from "../../huc/Auxilary";
import Modal from '../../components/UI/Modal/Modal';
//import Button from '../../components/UI/Button/Button';
import ContactData from '../ContactData/ContactData';

class FormBuilder extends Component {
    state={
        show:true
    }
    modalClicked=()=>{
        this.setState({show:false})
    }
    render(){
        return(
            <Auxilary>
                <Modal show={this.state.show} modalClosed={this.modalClicked}>
                    <ContactData />
                </Modal>
            </Auxilary>
        )
        
    }
}
export default FormBuilder;