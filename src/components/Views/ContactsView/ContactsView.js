import Container from "../../Container/Container";
import Section from "../../Section/Section";
import SubmitForm from "../../SubmitForm/SubmitForm";
import List from "../../List/List";
import FilterContacts from "../../FilterContacts/FilterContacts";

export default function ContactsView() {
  return (
    <>
      <Container>
        <Section title="Phonebook">
          <SubmitForm />
        </Section>
        <Section title="Contacts">
          <FilterContacts />
          <List />
        </Section>
      </Container>
    </>
  );
}
