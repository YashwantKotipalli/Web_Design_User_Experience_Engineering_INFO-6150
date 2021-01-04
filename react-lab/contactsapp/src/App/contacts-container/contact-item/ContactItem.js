import React from 'react';
import './ContactItem.scss';
import '../ContactsContainer.scss';

class ContactsItem extends React.Component {

    constructor(props){

        super(props);

    }

    render() {

        const contact = this.props.contact;
        
        return(
            
        <li onClick={() => this.props.deleteHandler(contact)}>{contact}</li>
        );
    }

}


export default ContactsItem;