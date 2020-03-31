import { firestore } from 'firebase-admin';
import { DateTime } from 'luxon';

export function serverTimestamp() {
  return firestore.FieldValue.serverTimestamp();
}

export function timestampToDateTime(
  field: firestore.Timestamp,
): DateTime | undefined {
  if (field) {
    return DateTime.fromJSDate(field.toDate());
  }
}

export function dateTimeToTimestamp(field: DateTime) {
  if (field) {
    return firestore.Timestamp.fromDate(field.toJSDate());
  }
}
