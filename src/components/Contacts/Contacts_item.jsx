import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactCss from '../Contacts/Contacts.module.css';

export class ContactsItem extends Component {
  render() {
    const { id, name, number } = this.props;
    return (
      <li id={id} key={nanoid} className={ContactCss.contact_item}>
        <p>*</p>
        {name}: {number}
        <button type="text" onClick={() => this.props.onDelete(id)} className={ContactCss.btn}>
          Delete
        </button>
      </li>
    );
  }
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
