let env;
if (import.meta.env.MODE === "production") {
  env = {
    PORT: 3000,
    FIREBASE_API_KEY: "AIzaSyC3rxoC-9WDEQQPjD836eAFXMXIMfdldJs",
    FIREBASE_AUTH_DOMAIN: "tappglobalcommercial-staging.firebaseapp.com",
    FIREBASE_PROJECT_ID: "tappglobalcommercial-staging",
    FIREBASE_STORAGE_BUCKET: "tappglobalcommercial-staging.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "839897001671",
    FIREBASE_APP_ID: "1:839897001671:web:26d4953fedb7f28dc118e2",
    FIREBASE_MEASUREMENT_ID: "G-R2D90NFS5C",
  };
} else {
  env = {
    PORT: 3000,
    FIREBASE_API_KEY: "AIzaSyC3rxoC-9WDEQQPjD836eAFXMXIMfdldJs",
    FIREBASE_AUTH_DOMAIN: "tappglobalcommercial-staging.firebaseapp.com",
    FIREBASE_PROJECT_ID: "tappglobalcommercial-staging",
    FIREBASE_STORAGE_BUCKET: "tappglobalcommercial-staging.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "839897001671",
    FIREBASE_APP_ID: "1:839897001671:web:26d4953fedb7f28dc118e2",
    FIREBASE_MEASUREMENT_ID: "G-R2D90NFS5C",
  };
}

export default env;
