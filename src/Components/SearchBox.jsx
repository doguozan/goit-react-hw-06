import PropTypes from "prop-types"; // 🔥 PropTypes import edildi
import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onChange }) => (
    <label className={s.searchBox}>
        Find contacts by name
        <input
            type="text"
            value={filter}
            onChange={(e) => onChange(e.target.value)}
            className={s.input}
        />
    </label>
);

// ✅ **PropTypes ile props doğrulaması eklendi**
SearchBox.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBox;
