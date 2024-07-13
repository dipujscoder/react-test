import React from "react";
import Layout from "../../components/Layouts";

export default function Home() {
  return (
    <Layout>
      <form action="dashboard">
        <input type="text" />
        <button type="button">Send</button>
      </form>
    </Layout>
  );
}
