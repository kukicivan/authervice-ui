import { DatePipe } from "@angular/common";

const DATE_FORMAT = 'dd.MM.yyyy HH:mm:ss';

export class Profile {
  id: number;
  bio: string;
  location: string;
  birth_date: string | null;
  member_type: number;

  constructor(profile: IProfile,) {
    const datePipe: DatePipe = new DatePipe('en-US');

    this.id = profile.id;
    this.bio = profile.bio;
    this.location = profile.location;
    this.birth_date = datePipe.transform(profile.birth_date, DATE_FORMAT);
    this.member_type = profile.member_type;
  }
}

export interface IProfile {
  id: number;
  bio: string;
  location: string;
  birth_date: string | null;
  member_type: number;
}
