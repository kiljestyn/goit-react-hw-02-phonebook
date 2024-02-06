import css from "./app.module.css";
import { Component } from "react";
import { nanoid } from 'nanoid';
import Phonebook from "./Phonebook/Phonebook";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    const user = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
    console.log(user);
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteted = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <Phonebook
          createContact={this.createContact}
          data={this.state.contacts}
        />
        {this.state.contacts.length > 0 && (
          <>
            <h2 className={css.title}>Contacts</h2>
            <Filter filter={this.state.filter} onChange={this.handleFilter} />
            <ContactList data={filteted} handleDelete={this.handleDelete} />
          </>
        )}
        </div>
    );
  }
}

export default App;


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
