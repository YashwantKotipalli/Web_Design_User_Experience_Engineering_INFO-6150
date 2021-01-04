import React from 'react';
import ContactItem from './contact-item/ContactItem';
import './ContactsContainer.scss';
class ContactsContainer extends React.Component {

   
    constructor(props){
        super(props);
    }

    render(){

        const contactsList = this.props.contacts.map((c,i) => {

        return( 
        <ContactItem key={i} contact={c} deleteHandler={this.props.deleteHandler}>

        </ContactItem>
        )
    });


        return(
            <ul>
                {contactsList}
            </ul>
        );
    }

}


export default ContactsContainer;