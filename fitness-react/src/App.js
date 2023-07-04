import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Pocetna from './Pocetna';
import Navbar from './Navbar';
import Proteini from './Proteini';
import Kontakt from './Kontakt';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [proteini] = useState([
    {
      id: 1,
      proizvodjac: "Now Sports",
      naziv: "Nutrition Whey Protein Isolate",
      opis: "Best overall whey-protein powder",
      cena: 25,
      procenat: "84%"
    },
    {
      id: 2,
      proizvodjac: "Optimum Nutrition",
      naziv: "Gold Standard Whey, Double Rich Chocolate",
      opis: "Best chocolate-flavored whey-protein powder",
      cena: 40,
      procenat: "81%"
    },
    {
      id: 3,
      proizvodjac: "Cellucor",
      naziv: "Cor Sport Whey Protein",
      opis: "Best vanilla-flavored whey protein powder",
      cena: 29,
      procenat: "76%"
    },
    {
      id: 4,
      proizvodjac: "Podium",
      naziv: "Whey Protein Powder - Maple Butter Pancake",
      opis: "Best whey-protein powder for mixing into smoothies and shakes",
      cena: 45,
      procenat: "72%"
    },
    {
      id: 5,
      proizvodjac: "Momentous",
      naziv: "Essential Grass-Fed Whey Protein",
      opis: "Best whey-protein powder for competitive athletes",
      cena: 60,
      procenat: "88%"
    },
    {
      id: 6,
      proizvodjac: "Genius",
      naziv: "Whey Protein Powder",
      opis: "Best whey-protein powder with dual-protein blend",
      cena: 40,
      procenat: "91%"
    },
    {
      id: 7,
      proizvodjac: "Iconic",
      naziv: "Chocolate Truffle Protein Powder",
      opis: "Best lactose-free chocolate-flavored whey-protein powder",
      cena: 38,
      procenat: "82%"
    },
  ]);

  return (
    <div >
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Pocetna></Pocetna>} />
          <Route path="/proteini" element={<Proteini niz={proteini}></Proteini>} />
          <Route path="/kontakt" element={<Kontakt></Kontakt>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
