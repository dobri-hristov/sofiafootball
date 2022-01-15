import React from "react";
import Hero from "../components/Hero/Hero";
import Contacts from "../components/Contacts/Contacts";
import useScrollToTop from "../hooks/useScrollToTop";

const ContactsPage = () => {
    useScrollToTop();

    return (
        <Hero isDynmic>
            <Contacts />
        </Hero>
    );
};

export default ContactsPage;
