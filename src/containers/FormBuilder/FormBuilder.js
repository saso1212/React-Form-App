import React, { Component } from 'react';
import Auxilary from "../../huc/Auxilary";
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

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
                    <h1>Enter your contact Data:</h1>
                    <Button btnType="Success" clicked={this.modalClicked}>Submit</Button>
                </Modal>
            </Auxilary>
        )
        
    }
}
export default FormBuilder;