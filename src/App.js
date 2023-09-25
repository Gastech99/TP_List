import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Input from "./components/forms/Input";
import Checkbox from "./components/forms/Checkbox";
import ProductCatRow from "./components/products/ProductCatRow";
import ProductRow from "./components/products/ProductRow";
import { useState } from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$100", stocked: true, name: "Pomme" },
  { category: "Fruits", price: "$200", stocked: true, name: "Orange" },
  { category: "Fruits", price: "$900", stocked: false, name: "Mangue" },
  { category: "Fruits", price: "$500", stocked: false, name: "Banane" },
  { category: "Legumes", price: "$300", stocked: true, name: "Manioc" },
  { category: "Legumes", price: "$400", stocked: false, name: "Carotte" },
  { category: "Legumes", price: "$700", stocked: false, name: "Patate" },
];

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState("");
  const visibleProduct = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked) {
      return false
    }

    if (search && !product.name.includes(search)){
      return false
    }
    return true
  })

  return (
    <div className="container my-3">
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockOnlyChange={setShowStockedOnly}
      />

      <ProductTable products={visibleProduct} />
    </div>
  );
}

function SearchBar({
  showStockedOnly,
  onStockOnlyChange,
  search,
  onSearchChange,
}) {
  return (
    <>
      <div className="mb-3">
        <Input
          value={search}
          onChange={onSearchChange}
          placeholder="Rechercher..."
        />
        <Checkbox
          checked={showStockedOnly}
          onChange={onStockOnlyChange}
          id="stocked"
          label="N'afficher que des produits en stock"
        />
      </div>
    </>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCatRow key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default App;
