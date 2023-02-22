// import { useDispatch, useSelector } from 'react-redux';
// import { delContact } from 'redux/contacts/operations';
// import { getContacts, getFilter } from 'redux/contacts/selectors';
// import css from './ContactList.module.css';

// const getVisibleContacts = (contacts, filter) => {
//   if (!filter) {
//     return contacts;
//   } else {
//     return contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(filter.toLowerCase());
//     });
//   }
// };

// export const ContactList = () => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);
//   const visibleContacts = getVisibleContacts(contacts, filter);

//   const dispatch = useDispatch();
//   const handleDelete = id => dispatch(delContact(id));

//   return (
//     <div className={css.wraperContactList}>
//       <ul className={css.contactList}>
//         {visibleContacts.map((contact, id) => (
//           <li key={id} className={css.contactListItem}>
//             {contact.name}: {contact.number}
//             <button
//               type="button"
//               className={css.contactListItemBtn}
//               onClick={() => handleDelete(contact.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


import { List, ListItem, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import {fetchContacts, deleteContact} from '../../redux/contacts/operations';
import { useEffect} from 'react';



export const ContactList = () => {
   const dispatch = useDispatch();
   const contacts = useSelector(getContacts);
   const filter = useSelector(getFilter);

   useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

   const getFilteredContacts = () => {
      const filterContactsList = contacts.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(filter.toLowerCase());
      });
    
      return filterContactsList;
    };
return (
   <>
   {contacts.length > 0 && (
      <List>
      {getFilteredContacts().map((contact, id) => (
     <ListItem key={id}>
       {contact.name}: {contact.number}
       <Button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete</Button>
     </ListItem>
    ))}
    </List>
   )}
   </> 
)
}