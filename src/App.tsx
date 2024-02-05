import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { Select } from "./components/Select";
import { Card } from "./components/Card";

function App() {
  return (
    <main className="mx-auto my-6 w-11/12	rounded-2xl bg-base-300 p-4">
      <Header />
      <section className="mt-6 flex items-center justify-between">
        <Tabs />
        <Select />
      </section>
      <section className="mt-8 grid grid-cols-2 justify-items-center gap-y-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}

export default App;
