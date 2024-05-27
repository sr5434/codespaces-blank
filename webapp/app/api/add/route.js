import { NextResponse } from 'next/server'

import {v4 as uuidv4} from 'uuid';

import { doc, setDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
import { db } from "../../firebaseConfig";

export async function POST(req){
  let reqJSON = await req?.json();
  await setDoc(doc(db, "users", uuidv4()), {
    email: reqJSON.email,
  });

  // Sample curl request to test this: curl -X POST -H "Content-Type: application/json" -d '{"email":"sr@abc.xyz", "location": "Miami, Florida"}' http://localhost:3000/api/newPost
  return NextResponse.json({ result: "" });
}