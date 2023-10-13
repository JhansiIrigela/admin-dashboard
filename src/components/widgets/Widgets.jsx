import React from "react";
import "./widgets.scss";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"; //orders
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"; //balance
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"; //sales

const Widgets = ({ type }) => {
  let data;

  switch (type) {
    case "Earning":
      data = {
        title: "Earnings",
        icon: <CurrencyExchangeOutlinedIcon className="icon" />,
        number: "198k",
        percentage: "37.8%",
      };
      break;
    case "Order":
      data = {
        title: "Orders",
        icon: (
          <ArticleOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#e7dbff", color: "#aa15ff" }}
          />
        ),
        number: "2.4k",
        percentage: "2%",
      };
      break;
    case "Balance":
      data = {
        title: "Balance",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#cdf3ff", color: "#437fcf" }}
          />
        ),
        number: "2.4k",
        percentage: "2%",
      };
      break;

    case "TotalSales":
      data = {
        title: "Total Sales",
        icon: (
          <ShoppingBagOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#fec2e6", color: "#d8090b" }}
          />
        ),
        number: "8.9k",
        percentage: "11%",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">{data.icon}</div>

      <div className="right">
        <span className="title">{data.title}</span>
        <span className="number">${data.number}</span>
        <span className="description positive">
          <ArrowUpwardOutlinedIcon />
          <span className="num">{data.percentage}</span> this month
        </span>
      </div>
    </div>
  );
};

export default Widgets;
