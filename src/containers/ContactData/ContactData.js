import React,{Component} from 'react';
import classes from './ContactData.css';
import Input from "../../components/UI/Input/Input";
import Button from '../../components/UI/Button/Button';

class ContactData extends Component {
state={
    orderForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '', 
            validation: {
                required: true
            },
            valid: false, 
            touched:false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
             validation: {
                required: true
            },
            valid: false,
             touched:false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '', 
            validation: {
                required: true, 
                minLength: 5,
                maxLength: 5,
                isNumeric: true
            },
            valid: false, 
            touched:false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '', 
             validation: {
                required: true
            },
            valid: false,
             touched:false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '', 
            validation: {
                required: true,
                isEmail:true
            },
            valid: false,
             touched:false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: '', 
            validation: {},
            valid: true,
             touched:false
        }
    },
    formIsValid:false,
   
}
//validation 
checkValidity=(value,rules)=>{
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
    
}


inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.orderForm
    };
    const updatedinputElement = { 
        ...updatedOrderForm[inputIdentifier]
    };
    console.log(updatedinputElement);
    updatedinputElement.value = event.target.value;
     updatedinputElement.valid = this.checkValidity(updatedinputElement.value, updatedinputElement.validation);
     updatedinputElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedinputElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({orderForm: updatedOrderForm, formIsValid:formIsValid});
}
    render(){
        const formElememtArray=[];
       for(let key in this.state.orderForm){
           formElememtArray.push({
               id:key,
               config:this.state.orderForm[key]
           })
       }
       let form=(
        <form onSubmit={this.orderHeandler}>
        {formElememtArray.map((inputElement)=>{
             return   <Input 
             key={inputElement.id}
             elementType={inputElement.config.elementType}
             elementConfig={inputElement.config.elementConfig}
             value={inputElement.config.value}
             changed={(event) => this.inputChangedHandler(event, inputElement.id)}
             invalid={!inputElement.config.valid}
             shouldValidate={inputElement.config.validation}
             touched={inputElement.config.touched}


             />
        })}
        <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
        </form>
       )
        return(
            <div className={classes.ContactData}>
            <h1>Enter your Contact Data:</h1>
            {form}
            </div>
        )
    }
}

export default ContactData;