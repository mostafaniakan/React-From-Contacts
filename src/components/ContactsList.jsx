import styles from "./ContactList.module.css"
import ContactItem from "./ContactItem.jsx";
const ContactsList = ({contacts,removeContact})=>{
    return(
        <div className={styles.container}>
            <h3 className={styles.contactTitle}>Contacts List</h3>
            {contacts.length ? <ul className={styles.contactsList}>{contacts.map((contact) => (
                <ContactItem data={contact}  key={contact.id} removeContact={removeContact}/>
            ))}</ul> : <p className={styles.message}>No Contact yet</p>}
        </div>
    )
}
export default ContactsList;