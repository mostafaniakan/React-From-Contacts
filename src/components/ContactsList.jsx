import styles from "./ContactList.module.css"
import ContactItem from "./ContactItem.jsx";
const ContactsList = ({contacts,removeContact})=>{
    console.log(contacts);
    return(
        <>
            <h3 className={styles.contactTitle}>Contacts List</h3>
            {contacts.length ? <ul className={styles.contactsList}>{contacts.map((contact) => (
                <ContactItem data={contact}  key={contact.id} removeContact={removeContact}/>
            ))}</ul> : "No Contact yet"}

        </>
    )
}
export default ContactsList;