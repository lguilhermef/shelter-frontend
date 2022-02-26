import { ContactType } from "./Contact.type";

export type ShelterType = {
    location: string,
    numberOfBeds: number,
    contactArr: ContactType[]
};