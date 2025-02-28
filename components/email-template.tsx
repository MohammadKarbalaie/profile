import React from "react";

interface EmailProps {
  name: string;
  email: string;
  msg: string;
}

export const EmailTemplate = ({ name, email, msg }: EmailProps) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>
    <h1 style={{ color: "#5662f6", fontSize: "24px" }}>I am {name}!</h1>
    <small style={{ color: "#999", fontSize: "14px" }}>{email}</small>
    <p style={{ marginTop: "16px", fontSize: "16px" }}>{msg}</p>
  </div>
);