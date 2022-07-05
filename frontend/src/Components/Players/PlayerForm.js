import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {

    submitPlayer(event) {
        event.preventDefault();

        axios.post("http://localhost:4000/players", {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value
        })
        .then((response) => {
            console.log(response);
        } )
        .catch((err) => {
           console.log(err);
        });
    }   

	render() {
		return( 
            
			<div className="row">
            <h1 className="center"> Add a New Player </h1>
			    <form className="col s12" onSubmit={this.submitPlayer.bind(this)} >

			        <div className="row">
				        <div className="input-field col s6">
				            <input id="firstName" ref="firstName" type="text" />
				            <label htmlFor="firstName">First Name</label>
				        </div>
				        <div className="input-field col s6">
				            <input id="lastName" ref="lastName"  type="text" />
				            <label htmlFor="lastName">Last Name</label>
				        </div>
				    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" ref="email" type="text" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="phone" ref="phone"  type="text" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                    </div>

                    <button className="btn waves-effect waves-light" type="submit" name="action"> Submit Player Info </button>

			    </form>
			</div>
		)
	}
}

export default PlayerForm;