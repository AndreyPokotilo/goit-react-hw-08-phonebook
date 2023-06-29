import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import { useDeleteContactsMutation } from 'redux/contacts/contactApi';
import css from './Contact.module.css';

export function Contact({ name, number, contactId }) {
  const [deleteContacts] = useDeleteContactsMutation();
  const onDeleteContacts = contactId => {
    deleteContacts(contactId);
  };
  return (
    <>
      <div className={css.itemContact}>
        <span className={css.icoName}>
          <FaUserAlt />
        </span>
        <p className={css.nameValue}>{name}</p>
        <span className={css.icoName}>
          <FaPhoneAlt />
        </span>
        <p className={css.nameValue}>{number}</p>
        <button
          className={css.btnContact}
          type="button"
          onClick={() => {
            onDeleteContacts(contactId);
          }}
        >
          <FaTrash className={css.icoBtn} />
        </button>
      </div>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
