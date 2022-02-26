import { ContactType } from "./Contact.type";

export type ShelterType = {
    id: number;
    country: string;
    city: string;
    contactArr: ContactType[];
    numberOfBeds: number;
    petFriendly: boolean;
};
