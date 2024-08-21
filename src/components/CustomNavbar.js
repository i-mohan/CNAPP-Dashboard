import React, { useState, useEffect } from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateCategories } from "../redux/widgetsSlice";

const CustomNavbar = ({ copiedCategories, setCopiedCategories }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = () => {
      const filteredWidgets = copiedCategories
        .map((category) => {
          const widgets = category.widgets.filter((widget) =>
            widget.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          return {
            ...category,
            widgets: widgets,
          };
        })
        .filter((category) => category.widgets.length > 0);
      dispatch(updateCategories(filteredWidgets));
    };

    fetchData();
  }, [searchTerm, dispatch]);

  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ borderBottom: "1px solid #e0e0e0" }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{ justifyContent: "flex-end" }}
      >
        <Form className="d-flex" style={{ maxWidth: "300px", width: "100%" }}>
          <FormControl
            type="search"
            placeholder="Search anything..."
            className="me-2"
            aria-label="Search"
            style={{ borderRadius: "10px", border: "1px solid #007bff" }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
