export enum PreferenceType {
  PickupLocation,
  DropoffLocation,
  PickupTime,
  DropoffTime,
  Periodic,
}

export interface Preference<T = object> {
  id?: string;
  kind: PreferenceType;
  properties: T;
}

export type PickupLocationPreference = {
  kind: PreferenceType.PickupLocation;
} & Preference<{
  lat: number;
  lon: number;
  radius: number;
}>;

export type DropoffLocationPreference = {
  kind: PreferenceType.DropoffLocation;
} & Preference<{
  lat: number;
  lon: number;
  radius: number;
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
