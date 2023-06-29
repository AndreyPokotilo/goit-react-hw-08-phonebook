import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { useFetchContactsQuery } from 'redux/contacts/contactApi';

import css from './phoneBook.module.css'

export function PhoneBook() {
    const { data } = useFetchContactsQuery();

    return (
        <div className={css.container}>
          <h1 className={css.titel}>Phonebook</h1>
          <div className={css.contactSection}>
            <div className={css.formSection}>
              <ContactForm />
            </div>
    
            <div className={css.listSection}>
              <h2 className={css.titelContacts}>Contacts</h2>
              <Filter />
              {data && data.length > 0 ? (
                <ContactList />
              ) : (
                <p className={css.message}>Add a new contact!</p>
              )}
            </div>
          </div>
        </div>
      );

}