import { useSelector, useDispatch } from "react-redux";
import s from "./FilterContacts.module.css";
import { getFilter } from "../../redux/contacts/selectors";
import * as contactsActions from "../../redux/contacts/actions";

const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterName = (e) => {
    dispatch(contactsActions.changeFilter(e.target.value));
  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        className={s.filter}
        type="text"
        placeholder="Enter name"
        value={filter}
        name={filter}
        onChange={handleFilterName}
      />
    </div>
  );
};

export default FilterContacts;
