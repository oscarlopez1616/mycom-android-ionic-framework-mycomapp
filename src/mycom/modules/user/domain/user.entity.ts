import {EmailAddressValueObject} from "./email-address.value-object";
import {LanguageValueObject} from "../../../shared/domain/language.value-object";
import {CountryValueObject} from "../../../shared/domain/country.value-object";
import {CityValueObject} from "../../../shared/domain/city.value-object";
import {UserIdValueObject} from "./user-id.value-object";
import {CompleteNameValueObject} from "./complete-name.value-object";
import {AggregateRoot} from "../../../../common/types/aggregate.root";

export class UserEntity extends AggregateRoot{
    private _id: UserIdValueObject;
    private _emailAddress: EmailAddressValueObject;
    private _completeName: CompleteNameValueObject;
    private _language: LanguageValueObject;
    private _country: CountryValueObject;
    private _city: CityValueObject;

    constructor(userId: UserIdValueObject,
                emailAddress: EmailAddressValueObject,
                completeName: CompleteNameValueObject,
                language: LanguageValueObject,
                country: CountryValueObject,
                city: CityValueObject,
                createdAt: Date,
                updatedAt: Date

    ) {
        super(createdAt, updatedAt);
        this._id = userId;
        this._emailAddress = emailAddress;
        this._completeName = completeName;
        this._language = language;
        this._country = country;
        this._city = city;
    }

    public id(): UserIdValueObject {
        return this._id;
    }

    public emailAddress(): EmailAddressValueObject {
        return this._emailAddress;
    }

    public completeName(): CompleteNameValueObject {
        return this._completeName;
    }

    public language(): LanguageValueObject {
        return this._language;
    }

    public country(): CountryValueObject {
        return this._country;
    }

    public city(): CityValueObject {
        return this._city;
    }

    public changeCountry(country: CountryValueObject): void{
        this._country = country;
    }
}
