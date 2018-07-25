import React, { Component } from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import { withRouter } from "react-router-dom";

import 'react-dates/initialize'

const now =moment()


class ExpenseForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            description: props.expense ? props.expense.description:'',
            note: props.expense ? props.expense.note :'',
            amount: props.expense ? (props.expense.amount/100).toString():'',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calendarFocused:false,
            error:'',
            amountPlaceholder:'Amount',
            desPlaceholder:'Description',
            notePlaceholder:'Notes(Optional)'
        }
    }
    

    onDescriptionChange =(e)=>{
        const description = e.target.value
        this.setState(()=>({description}))
    }

    onNoteChange =(e)=>{
        const note = e.target.value
        this.setState(()=>({note}))
    }

    onAmountChange=(e)=>{
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }

    onDateChange =(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}))
        }
        
    }

    onFocusChange =({focused})=>{
        this.setState(()=>({calendarFocused:focused}))
    }

    cancel=(e)=>{
        e.preventDefault();
        console.log(this.props)
        this.props.history.push('/dashboard')
    }


    onSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.description || !this.state.amount) {
          this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
          this.setState(() => ({ error: '' }));
          this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
          });
        }
      };

    render () {
        return (
            
                <form className="form" >
                    {this.state.error && <p className="form__error">{this.state.error}</p>}

                    <div className="form-group input-effect">
                        <input className="effect-21" type="text" placeholder={this.state.desPlaceholder} value={this.state.description} onChange={this.onDescriptionChange} />
                        <label>Description</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <br/>
                    <div className="form-group input-effect">
                        <input className="effect-21" type="text" placeholder={this.state.amountPlaceholder} value={this.state.amount} onChange={this.onAmountChange} />
                        <label>Amount</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <br/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths= {1}
                        isOutsideRange={()=> false}
                    />
                    <br/>
                    <div className="form-group input-effect">
                        <input className="effect-21 textarea"  placeholder={this.state.notePlaceholder} value={this.state.note} onChange={this.onNoteChange} />
                        <label>Note</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <br/>
                    <div>
                        <button className="button" onClick={this.onSubmit}>Save Expense</button>
                        <button className="cancel-button" style={{float:"right", width:"140px"}} onClick={this.cancel}>Cancel</button> 
                    </div>
                    
                </form>
            
        )
    }
}

export default withRouter(ExpenseForm)