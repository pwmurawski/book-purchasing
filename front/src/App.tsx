import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import Order from "./pages/Order/Order";

export default function App() {
  const header = <Header />;

  const main = (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/koszyk" element={<Basket />} />
      <Route path="/zamowienie" element={<Order />} />
    </Routes>
  );

  return (
    <Router>
      <Layout header={header} main={main} />
    </Router>
  );
}
