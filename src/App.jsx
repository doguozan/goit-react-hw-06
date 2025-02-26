import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import SearchBox from "./Components/SearchBox";

import initialContacts from "./contact.json";
import { BookUserIcon } from "lucide-react";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newConctact = { id: nanoid(), name, number };
    setContacts((prevContacts) => [...prevContacts, newConctact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <div className="App">
      <div className="header">
        <BookUserIcon className="w-12 h-12 custom-blue-icon" />
        <h1 className="custom-dark-blue">
          Phone<span className="custom-dark-blue">Book</span>
        </h1>
      </div>
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} onChange={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
