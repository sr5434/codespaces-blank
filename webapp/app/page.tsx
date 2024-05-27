"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const submitHandler = async (e: any) => {
    e.preventDefault();
    await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    setEmail("");
    alert("You have been added to the Daily Haiku Newsletter!")
  }

  const handleEmailInput = async (e: any) => {
    const fieldValue = e.target.value;

    await setEmail(fieldValue);
  }

  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Sign Up for the Daily Haiku Newsletter</h1>
      <form onSubmit={submitHandler}>
        <label className="block mb-2 pt-6 text-sm font-medium text-gray-900 dark:text-white" htmlFor="codeInput">Email</label>
        <textarea
          value={email}
          onChange={handleEmailInput}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br />
        <button 
          type="submit"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg mb-5"
          >
          Add
        </button>
      </form>
    </div>
  );
}
