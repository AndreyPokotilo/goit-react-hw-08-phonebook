import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contacts/selectors';
import css from './ContactList.module.css';
import { useFetchContactsQuery } from 'redux/contacts/contactApi';

export function ContactList() {
  const filterValue = useSelector(getFilterValue);

  const { data } = useFetchContactsQuery();

  const onFilterSearch = () => {
    const normaliseFilter = filterValue.toLowerCase().trim();

    return data.filter(({ name }) =>
      name.toLowerCase().includes(normaliseFilter)
    );
  };

  return (
    <ul className={css.listContact}>
      {onFilterSearch().map(({ id, name, number }) => (
        <li className={css.listItem} key={id}>
          <Contact name={name} number={number} contactId={id} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
