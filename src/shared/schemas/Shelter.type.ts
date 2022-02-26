import { ContactType } from "./Contact.type";

export type ShelterType = {
    id: number;
    country: string;
    city: string;
    contact: ContactType;
    numberOfBeds: number;
    petFriendly: boolean;
};
