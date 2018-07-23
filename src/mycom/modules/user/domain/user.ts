import {EmailAddress} from "./email.address";
import {Language} from "../../shared/domain/language";
import {Country} from "../../shared/domain/country";
import {City} from "../../shared/domain/city";
import {UserId} from "./user.id";
import {CompleteName} from "./complete.name";
import {AggregateRoot} from "../../common/types/domain.entity";

export class User extends AggregateRoot{
    private _userId: UserId;
    private _emailAddress: EmailAddress;
    private _completeName: CompleteName;
    private _language: Language;
    private _country: Country;
    private _city: City;

    constructor(userId: UserId,
                emailAddress: EmailAddress,
                completeName: CompleteName,
                language: Language,
                country: Country,
                city: City,
                createdAt: Date,
                updatedAt: Date

    ) {
        super(createdAt, updatedAt);
        this._userId = userId;
        this._emailAddress = emailAddress;
        this._completeName = completeName;
        this._language = language;
        this._country = country;
        this._city = city;
    }

    public userId(): UserId {
        return this._userId;
    }

    public emailAddress(): EmailAddress {
        return this._emailAddress;
    }

    public completeName(): CompleteName {
        return this._completeName;
    }

    public language(): Language {
        return this._language;
    }

    public country(): Country {
        return this._country;
    }

    public city(): City {
        return this._city;
    }

    public changeCountry(country: Country): void{
        this._country = country;
    }
}
