import * as firebase from "firebase";
import { firebaseConfig } from "./config";

const app = firebase.initializeApp(firebaseConfig);
app.analytics();
export const db = app.firestore();
export default app;