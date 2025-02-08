import Link from "next/link";
import React from "react";

const ComplexDashboardPage = () => {
  return (
    <>
      <h1>Complext Dashboard</h1>

      <Link
        href="/"
        className="bg-green-800 px-8 py-1 rounded-md  my-5 inline-block"
      >
        Back to home
      </Link>
    </>
  );
};

export default ComplexDashboardPage;
