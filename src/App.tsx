import Header from "./components/Header";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import PurchasedList from "./components/PurchasedList";

function App() {
  return (
    <main className="max-w-2xl px-6 py-12 pb-20 mx-auto my-10 bg-white md:my-20 md:px-32 md:rounded-3xl">
      <Header />
      <Form />
      <ItemsList />
      <PurchasedList />
    </main>
  );
}

export default App;
