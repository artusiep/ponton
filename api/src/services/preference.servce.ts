import { Injectable } from '@nestjs/common';
import { IPreference } from '../../../models/iPreference';
import { Preference } from './models/preference';

@Injectable()
export class PreferenceService {
  create(preference: IPreference): Promise<IPreference> {
    const preferenceModel = new Preference(preference);
    return preferenceModel.save();
  }

  findAll() {
    return Preference.find({});
  }

  findOne(id: string) {
    return Preference.findOne({id});
  }

  update(id: string, ride: IPreference) {
    return 'Not implemented';
  }
}
