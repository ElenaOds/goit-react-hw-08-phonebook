import { ContactForm }  from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { MainTitle, Title } from './App.styled';


export function App() {

    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList  />
      </div>
    )  
};

export default App;
