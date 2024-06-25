import {useState} from "react";
import ContactsList from "./ContactsList.jsx";

import inputs from "../constants/input.js"
import {v4} from "uuid";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        id : "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact(contact => ({...contact, [name]: value}));

    }
    const AddHandler = () => {
        if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
            setAlert("Please Check Value");
            return;
        } else {
            setAlert("");
        }
        const newContact={...contact,id: v4()}
        setContacts(contacts => ([...contacts, newContact]));
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        })
    }
    const removeContact = (id) => {
        setContacts(contacts => contacts.filter(item => item.id !== id));
    };
    return (
        <div>
            <div>
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        onChange={changeHandler}
                        value={contact[input.name]}
                    />
                ))}
                <button onClick={AddHandler}>Add Contact</button>
            </div>
            <div>
                {alert && <p>{alert}</p>}
            </div>
            <ContactsList contacts={contacts} removeContact={removeContact}/>
        </div>
    )
}
export default Contacts;