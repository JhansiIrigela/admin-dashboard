import React from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Graph from "../../components/graph/Graph";
import Piechart from "../../components/piechart/Piechart";
import ProductSell from "../../components/productSell/ProductSell";
import StockDetails from "../../components/stockDetails/StockDetails";

const Home = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="Earning" />
          <Widgets type="Order" />
          <Widgets type="Balance" />
          <Widgets type="TotalSales" />
        </div>
        <div className="charts">
          <Graph />
          <Piechart />
        </div>
        <div className="thirdPart">
          <ProductSell />
          <StockDetails />
        </div>
      </div>
    </div>
  );
};

export default Home;
