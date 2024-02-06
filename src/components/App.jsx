import css from "./app.module.css";
import { Component } from "react";
import { nanoid } from 'nanoid';
import Phonebook from "./Phonebook/Phonebook";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [],
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
