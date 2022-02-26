import { ContactType } from "../Enums/Enums";

export interface Shelter {
    location: string,
    numberOfBeds: number,
    contactArr: Contact[]
};

export interface Contact {
    type: ContactType,
    identifier: string
}