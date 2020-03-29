import * as admin from 'firebase-admin';

export type Timestamp = admin.firestore.Timestamp;
export type FieldValue = admin.firestore.FieldValue

export function serverTimestamp() {
  return admin.firestore.FieldValue.serverTimestamp();
}
