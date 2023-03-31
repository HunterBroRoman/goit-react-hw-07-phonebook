import { useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import {
  selectFiltredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

import { ContactItem } from '../ContactItem/ContactItem';
import { List, Item } from 'components/ContactList/ContactList.styled';

export function ContactList() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <>
      {isLoading && !error && (
        <ThreeCircles
          height="100"
          width="100"
          color="#f8a035"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      )}
      {error && <p>{error}</p>}
      {filtredContacts.length > 0 && !error ? (
        <List>
          {filtredContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <ContactItem id={id} name={name} number={number} />
            </Item>
          ))}
        </List>
      ) : (
        !isLoading && <p>Not found any contact :(</p>
      )}
    </>
  );
}
export default ContactList;