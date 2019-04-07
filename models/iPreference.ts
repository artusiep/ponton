export type PreferenceType = 'PickupLocation' | 'DropoffLocation' | 'PickupTime' | 'DropoffTime' | 'Periodic' | 'Driver';

export interface IPreference<T = object> {
  kind: PreferenceType;
  properties: T;
}

export type PickupLocationPreference = {
  kind: 'PickupLocation';
} & IPreference<{
  lat: number;
  lon: number;
  radius: number;
}>;

export type DropoffLocationPreference = {
  kind: 'DropoffLocation';
} & IPreference<{
  lat: number;
  lon: number;
  radius: number;
}>;

export type PickupTimePreference = {
  kind: 'PickupTime';
} & IPreference<{
  time: { hour: number; minute: number };
  offset: { before: number; after: number };
}>;

export type DropOffTimePreference = {
  kind: 'DropoffTime';
} & IPreference<{
  time: { hour: number; minute: number };
  offset: { before: number; after: number };
}>;

export type PeriodicPreference = {
  kind: 'Periodic';
} & IPreference<boolean>;
