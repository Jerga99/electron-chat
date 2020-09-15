import { Timestamp } from '../db/firestore';

export const createTimestamp = () => {
  return Timestamp.now().toMillis().toString();
}
