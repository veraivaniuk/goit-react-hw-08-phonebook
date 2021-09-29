import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import s from "./List.module.css";
import Button from "../Button";
import { getVisibleContacts } from "../../redux/contacts/selectors";
import { fetchContacts, deleteContact } from '../../redux/contacts/operation';


function List() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      { contacts.length > 0 &&
        contacts.map((el) => {
        return (
          <li className={s.list} key={el.id}>
            {el.name}: {el.number}
            <Button
              buttonName="Delete"
              onDelete={() => dispatch(deleteContact(el.id))}
            ></Button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
