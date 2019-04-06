export enum PreferenceType {
  PickupLocation,
  DropoffLocation,
  PickupTime,
  DropoffTime,
  Periodic,
}

export interface IPreference<T = object> {
  kind: PreferenceType;
  properties: T;
}

export type PickupLocationPreference = {
  kind: PreferenceType.PickupLocation;
} & IPreference<{
  lat: number;
  lon: number;
  radius: number;
}>;

export type DropoffLocationPreference = {
  kind: PreferenceType.DropoffLocation;
} & IPreference<{
  lat: number;
  lon: number;
  radius: number;
}>;

export type PickupTimePreference = {
  kind: PreferenceType.PickupTime;
} & IPreference<{
  time: { hour: number; minute: number };
  offset: { before: number; after: number };
}>;

export type DropOffTimePreference = {
  kind: PreferenceType.DropoffTime;
} & IPreference<{
  time: { hour: number; minute: number };
  offset: { before: number; after: number };
}>;

export type PeriodicPreference = {
  kind: PreferenceType.Periodic;
} & IPreference<boolean>;
