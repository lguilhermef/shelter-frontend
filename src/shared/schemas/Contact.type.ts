import ContactEnum from "../enums/Contact.enum";

export type ContactType = {
    id: number;
    number: string;
    contactType: ContactEnum;
};
