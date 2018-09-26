import React, { Component } from 'react';
import Auxilary from "../../huc/Auxilary";
import Modal from '../../components/UI/Modal/Modal';

class FormBuilder extends Component {
    state={
        show:true
    }
    render(){
        return(
            <Auxilary>
                <Modal show={this.state.show}>
                    <h1>This is test modal</h1>
                    <p>Let me see haw its look like</p>
                </Modal>
            </Auxilary>
        )
        
    }
}
export default FormBuilder;