export enum PreferenceType {
  Location,
  PickupTime,
  DropoffTime,
  Periodic,
}

export interface Preference<T = object> {
  id?: string;
  kind: PreferenceType;
  properties: T;
}

export type LocationPreference = {
  kind: PreferenceType.Location;
} & Preference<{
  lat: number;
  lon: number;
  offset: number;
}>;

export type PickupTimePreference = {
  kind: PreferenceType.PickupTime;
} & Preference<{
  time: { hour: number; minute: number };
  offset: { before: number; after: number };
}>;

export type DropOffTimePreference = {
  kind: PreferenceType.DropoffTime;
} & Preference<{
  time: { hour: number; minute: number };
  offset: { before: number; after: number };
}>;

export type PeriodicPreference = {
  kind: PreferenceType.Periodic;
} & Preference<boolean>;
