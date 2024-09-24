let env;
// if (import.meta.env.MODE === "production") {
env = {
  PORT: 3000,
  FIREBASE_API_KEY: "AIzaSyCCXGPLzExuR3W__PjIOJdUNdF7NtyS5Mk",
  FIREBASE_AUTH_DOMAIN: "tappglobalcommercial.firebaseapp.com",
  FIREBASE_PROJECT_ID: "tappglobalcommercial",
  FIREBASE_STORAGE_BUCKET: "tappglobalcommercial.appspot.com",
  FIREBASE_MESSAGING_SENDER_ID: "963396976544",
  FIREBASE_APP_ID: "1:963396976544:web:eaf7da54f4adfdfb606ec5",
  FIREBASE_MEASUREMENT_ID: "G-D2H0W24YMY",
};
// } else {
//   env = {
//     PORT: 3000,
//     FIREBASE_API_KEY: "AIzaSyC3rxoC-9WDEQQPjD836eAFXMXIMfdldJs",
//     FIREBASE_AUTH_DOMAIN: "tappglobalcommercial-staging.firebaseapp.com",
//     FIREBASE_PROJECT_ID: "tappglobalcommercial-staging",
//     FIREBASE_STORAGE_BUCKET: "tappglobalcommercial-staging.appspot.com",
//     FIREBASE_MESSAGING_SENDER_ID: "839897001671",
//     FIREBASE_APP_ID: "1:839897001671:web:26d4953fedb7f28dc118e2",
//     FIREBASE_MEASUREMENT_ID: "G-R2D90NFS5C",
//   };
// }

export default env;
