import PropTypes from "prop-types"; // 🔥 PropTypes import edildi
import Contact from "./Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.list}>
        {contacts.map((contact) => (
            <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={() => onDeleteContact(contact.id)}
            />
        ))}
    </ul>
);

// ✅ **PropTypes ile props doğrulaması eklendi**
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
