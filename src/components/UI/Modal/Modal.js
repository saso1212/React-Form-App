import React ,{Component} from 'react';
import Auxilary from '../../../huc/Auxilary';
import classes from './Modal.css';

class Modal extends Component {


    render(){
        return(
            <Auxilary>
                  <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxilary>
        )
    }
}

export default Modal;