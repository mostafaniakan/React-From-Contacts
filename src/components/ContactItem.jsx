import styles from "./ContactItem.module.css";

const ContactItem = ({data: {id, name, lastName, email, phone}, removeContact}) => {
    return (
        <li className={styles.contactItem}>
            <p>{name} {lastName}</p>
            <p><span>📧 </span>{email}</p>
            <p><span>📞</span>{phone}</p>
            <button onClick={() => removeContact(id)}>🗑</button>
        </li>
    )
}
export default ContactItem