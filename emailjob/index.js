import { db } from "./firebaseConfig.js";
import sgMail from '@sendgrid/mail';
import haiku from 'haiku-random'
import dotenvLoad from "dotenv-load";
import { collection, getDocs } from "firebase/firestore";

dotenvLoad();

const random_haiku = haiku.random();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const snapshot = await getDocs(collection(db, "users"));
const users = [];
snapshot.forEach(doc => {
    users.push({email: doc.data().email, id: doc.id});
});
for(let i=0; i < users.length; i++) {
    const msg = {
        to: users[i].email, // Change to your recipient
        from: process.env.SENDER_EMAIL, // Change to your verified sender
        subject: 'Random Daily Haiku for ' + new Date().toLocaleDateString(),
        html: `<h1>Random Daily Haiku</h1>
        <p>${random_haiku[0]}</p>
        <p>${random_haiku[1]}</p>
        <p>${random_haiku[2]}</p><br>
        <a href="https://daily-random-haiku-x6v3lrwanq-uk.a.run.app/delete/${users[i].id}">Unsubscribe</a>`,
    }
    sgMail.send(msg)
}