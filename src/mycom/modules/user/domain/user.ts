import {EmailAddress} from "./email.address";
import {Language} from "./language";
import {Country} from "./country";

export class User {
    private _userId: UserId;
    private _emailAddress: EmailAddress;
    private _completeName: CompleteName;
    private _language: Language;
    private _country: Country;
    private _city: City;

    constructor(userId: UserId,
                emailAddress: Email,
                compleName: CompleteName,
                language: Language,
                country: Country,
                city: City
    ) {
        this._userId;
        this._emailAddress = emailAddress;
        this._completeName = compleName;
        this._language = language;
        this._country = country;
        this._city = city;
    }

    public userId(): UserId {
        return this.userId;
    }

    public emailAddress(): Email {
        return this.emailAddress;
    }

    public completeName(): CompleteName {
        return this._completeName;
    }

    public language(): Language {
        return this.language;
    }

    public country(): Country {
        return this.country;
    }

    public city(): City {
        return this.city;
    }
}
