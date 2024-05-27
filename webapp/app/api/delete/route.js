import { NextResponse } from 'next/server'

import { doc, deleteDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
import { db } from "../../firebaseConfig";

export async function POST(req){
  let reqJSON = await req?.json();
  await deleteDoc(doc(db, "users", reqJSON.id));

  // Sample curl request to test this: curl -X POST -H "Content-Type: application/json" -d '{"id":"dc5c5030-5dae-4dcf-887c-4b87cf85c853"}' http://localhost:3000/api/delete
  return NextResponse.json({ result: "" });
}