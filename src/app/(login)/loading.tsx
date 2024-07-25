import React from "react";

function Loading() {
  return (
    <div className="min-h-screen text-center">
      <span
        className="loading loading-lg loading-spinner text-accent"
        style={{ marginTop: "15%" }}
      ></span>
    </div>
  );
}

export default Loading;
