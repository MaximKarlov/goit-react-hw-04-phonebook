import { useState, useEffect } from 'react';
import { save, load } from './storage.js';
import AppCss from '../components/App.module.css';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/Contacts';

export const App = () => {
  const [contactsList, setContactsList] = useState('');
  const [filter, setFilter] = useState('');

  const onSubmitHandler = data => {
    if (contactsList !== '')
      if (contactsList.find(elem => elem.name === data.name)) {
        alert(`${data.name} is already existing`);
        return false;
      }
    setContactsList([...contactsList, data]);
    return true;
  };
  const findByName = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    save('ContactsArray', contactsList);
  }, [contactsList]);

  useEffect(() => {
    console.log('filter', filter);
  }, [filter]);

  return (
    <div className={AppCss.component}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitHandler} />
      <h2>Contacts</h2>
      <Filter find={findByName} />
    </div>
  );
};

//   componentDidMount() {
//     if (load('ContactsArray') === null) {
//       return [];
//     }

//     const readLocalStorage = load('ContactsArray');
//     if (readLocalStorage.length > 0) {
//       if (this.state.contacts.length === 0) {
//         return this.setState({ contacts: readLocalStorage });
//       }
//       return 'Contacts not empty';
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       console.log('Contacts added succesfuly');
//       save('ContactsArray', contacts);
//     }
//   }

// onSubmitHandler = data => {
//   const { name } = data;
//   if (this.state.contacts.find(elem => elem.name === name)) {
//     alert(`${name} is already existing`);
//     return false;
//   } else {
//     this.setState(prevState => {
//       return {
//         contacts: [...prevState.contacts, data],
//       };
//     });
//     return true;
//   }
// };

//   deleteContacts = id => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== id),
//       };
//     });
//   };

//   findByName = e => {
//     const { value } = e.currentTarget;
//     return this.setState({ filter: value });
//   };
//   sortingName = () => {
//     if (this.state.filter === '') {
//       if (this.state.contacts.length === 0) {
//         return [];
//       }
//       return this.state.contacts;
//     }
//     return this.state.contacts.filter(({ name }) => name.toLowerCase().includes(this.state.filter.toLowerCase()));
//   };

//   render() {
//     const sortingName = this.sortingName();
//     return (
//       <div className={AppCss.component}>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.onSubmitHandler} />
//         <h2>Contacts</h2>
//         <Filter onChange={this.findByName} />
//         <ContactList options={sortingName} onDelete={this.deleteContacts} />
//       </div>
//     );
//   }
// }
