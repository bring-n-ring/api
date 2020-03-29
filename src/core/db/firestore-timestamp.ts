import * as admin from 'firebase-admin';
import { DateTime } from 'luxon';

export type Timestamp = admin.firestore.Timestamp;
export type FieldValue = admin.firestore.FieldValue;

export function serverTimestamp() {
  return admin.firestore.FieldValue.serverTimestamp();
}

export function timestampToDateTime(field: FieldValue): DateTime | undefined {
  if (field) {
    return DateTime.fromJSDate((field as Timestamp).toDate());
  }
}
