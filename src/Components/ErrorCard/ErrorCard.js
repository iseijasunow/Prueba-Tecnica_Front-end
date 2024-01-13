import React from "react";

export default function ErrorCard({ error }) {
  return (
    <div>
      <p>An error occurred:</p>
      <p>{error.message}</p>
    </div>
  );
}
