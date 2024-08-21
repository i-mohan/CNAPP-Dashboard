import React, { useState } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import AddWidgetModal from "./AddWidgetModal";
import CustomNavbar from "./CustomNavbar";
import { Container, Button } from "react-bootstrap";

const Dashboard = () => {
  const categories = useSelector((state) => state.widgets.categories);
  const [copiedCategories, setCopiedCategories] = useState(categories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleMenuVisible = (index) => {
    setSelectedTabIndex(parseInt(index) || 0);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container fluid>
      <CustomNavbar
        copiedCategories={copiedCategories}
        setCopiedCategories={setCopiedCategories}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "15px",
        }}
      >
        <h1>CNAPP Executive Dashboard</h1>
        <Button variant="primary" onClick={handleMenuVisible}>
          Add Widget +
        </Button>
      </div>
      {categories.map((category, index) => (
        <Category
          key={`category-${category.id}`}
          category={category}
          catIndx={index}
          handleMenuVisible={handleMenuVisible}
        />
      ))}
      {
        <AddWidgetModal
          selectedTabIndex={selectedTabIndex}
          isModalOpen={isModalOpen}
          handleMenuVisible={handleMenuVisible}
        />
      }
    </Container>
  );
};

export default Dashboard;
