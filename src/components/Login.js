import React, { Component } from 'react'



export function Input(props){
    return(
        <div className="Input">
				<input id={props.name} autocomplete="false" required type={props.type} placeholder={props.placeholder} />	
				<label for={props.name}></label>
			</div>
    )
}


export class Modal extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            username:'',
            password:''
        }
    }
    render () {
        return (
            <div className="Modal">
                <form onSubmit={this.props.onSubmit} className="ModalForm">
					<Input id="name" type="text" placeholder="Jack-Edward Oliver" />
					<Input id="username" type="email" placeholder="mrjackolai@gmail.com" />
					<Input id="password" type="password" placeholder="password" />
					<button>Log in <i className="fa fa-fw fa-chevron-right"></i></button>
				</form>
            </div>
        )
    }
}



