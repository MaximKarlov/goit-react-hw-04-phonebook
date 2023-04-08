import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import FormCss from '../Form/Form.module.css';
let newUser = {};
export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('12312fdsfds');
    }
  };

  const addContacts = e => {
    e.preventDefault();
    newUser = {
      id: nanoid(),
      name,
      number,
    };
    if (onSubmit(newUser)) {
      setName('');
      setNumber('');
    } else setName('');
  };

  return (
    <form onSubmit={addContacts} className={FormCss.form}>
      <div className={FormCss.input__contacts}>
        <label className={FormCss.input__item}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={FormCss.input__item}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleNameChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={FormCss.input__btn}>
          Add contact
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
