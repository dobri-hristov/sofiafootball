import React from "react";
import Contacts from "../components/Contacts/Contacts";
import useScrollToTop from "../hooks/useScrollToTop";
import field from '../assets/field.jpg'

const styles = {
    backgroundImage: `url(${field})`,
    backgroundSize: 'cover',
}

const ContactsPage = () => {
    useScrollToTop();
    return (
        <div style={styles}>
                <Contacts />
        </div>
    );
};

export default ContactsPage;
