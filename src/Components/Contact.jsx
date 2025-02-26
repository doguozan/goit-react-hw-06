import PropTypes from "prop-types"; // 🔥 PropTypes import edildi
import s from "./Contact.module.css";
import { HiPhone, HiUser } from "react-icons/hi";

const Contact = ({ name, number, onDelete }) => (
    <li className={s.contact}>
        <div className={s.container}>
            <span className={s.iconText}>
                <HiUser className={s.userIcon} size="24" />
                {name}
            </span>
            <span className={s.iconText}>
                <HiPhone className={s.phoneIcon} size="24" />
                {number}
            </span>
        </div>
        <button className={s.button} onClick={onDelete}>
            Delete
        </button>
    </li>
);

// ✅ **PropTypes ile props doğrulaması eklendi**
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired, // Eksik prop doğrulaması eklendi
};

export default Contact;
