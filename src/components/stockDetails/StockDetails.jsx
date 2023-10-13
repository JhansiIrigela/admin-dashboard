import React from "react";
import "./stockDetails.scss";
import SearchIcon from "@mui/icons-material/Search";

const StockDetails = () => {
  return (
    <div className="stocks">
      <div className="search">
        <SearchIcon className="icon" />
        <input type="text " placeholder="Search..." />
      </div>
      <div className="table">
        <table>
          <tr>
            <th>stock</th>
            <th>price</th>
            <th>Total Sales</th>
          </tr>
          <tr>
            <td>32 in stock</td>
            <td className="price">$ 45.99</td>
            <td>20</td>
          </tr>
          <tr>
            <td>32 in stock</td>
            <td className="price">$ 45.99</td>
            <td>20</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default StockDetails;
