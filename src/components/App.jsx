import { useState, useEffect } from 'react';
import { save, load } from './storage.js';
import AppCss from '../components/App.module.css';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/Contacts';

export const App = () => {
  const [contactsList, setContactsList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (load('ContactsArray') === null) {
      return [];
    }
    const readLocalStorage = load('ContactsArray');
    if (readLocalStorage.length > 0) {
      setContactsList(readLocalStorage);
    }
  }, []);

  useEffect(() => {
    save('ContactsArray', contactsList);
  }, [contactsList]);

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

  const sortingName = () => {
    if (filter === '') {
      if (contactsList.length === 0) {
        return [];
      }
      return contactsList;
    }
    return contactsList.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContacts = id => {
    setContactsList(contactsList.filter(contact => contact.id !== id));
  };

  return (
    <div className={AppCss.component}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitHandler} />
      <h2>Contacts</h2>
      <Filter find={findByName} />
      <ContactList options={sortingName()} onDelete={deleteContacts} />
    </div>
  );
};
