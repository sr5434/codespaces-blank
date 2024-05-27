"use client"
import { useEffect } from "react";

export default function DeleteUser({ params: { id } }: { params: { id: string } }){
    useEffect(() => {
        fetch("/api/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id
            }),
        });
    }, []);
    return (
        <p>You have been succesfully removed</p>
    )
}