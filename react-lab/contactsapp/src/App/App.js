import './App.scss';
import React from 'react';
import ContactsContainer from './contacts-container/ContactsContainer';


class App extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      contacts: [
        "John Adams",
        "Jeffereson",
        "Hamilton"
      ],

      count: 0

    }; 

  }

  deleteContact(contact){

    this.setState((state) => {
      const contacts = [];
      state.contacts.forEach(c => {
        if(c !== contact){
          contacts.push(c);
        }
      })

      return {contacts: contacts}
        
      });
      

  }

  componentDidMount(){
    
          this.setState((state) => {
            const contacts = [];
            contacts.push(...state.contacts);
            contacts.push('new item');
            return {contacts: contacts}
        });
  }

  componentWillUnmount(){

  }
  render(){

    return (
    <ContactsContainer contacts = {this.state.contacts} deleteHandler = {this.deleteContact.bind(this)}></ContactsContainer>
    );
  }
    
  
}

export default App;
