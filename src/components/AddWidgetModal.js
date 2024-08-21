import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategories } from "../redux/widgetsSlice";
import { Button, Tabs, Tab, Offcanvas } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AddWidgetModal = ({
  handleMenuVisible,
  isModalOpen,
  selectedTabIndex,
}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.widgets.categories);
  const [copiedCategories, setCopiedCategories] = useState(categories);

  useEffect(() => {
    setCopiedCategories(JSON.parse(JSON.stringify(categories)));
  }, [categories, isModalOpen]);

  const handleCheckboxChange = (catIndx, widIndx) => {
    setCopiedCategories((prevCategories) => {
      // Create a deep copy of the categories to avoid reference issues
      return prevCategories.map((category, categoryIndex) => {
        if (categoryIndex !== catIndx) return category;
        const updatedWidgets = category.widgets.map((widget, widgetIndex) => {
          if (widgetIndex !== widIndx) return widget;
          return { ...widget, visible: !widget.visible };
        });
        return { ...category, widgets: updatedWidgets };
      });
    });
  };

  const handleConfirm = () => {
    dispatch(updateCategories(copiedCategories));
    handleMenuVisible();
  };

  const handleCancel = () => {
    setCopiedCategories([]); // Clear copied categories on cancel
    handleMenuVisible();
  };

  return (
    <>
      <Offcanvas
        show={isModalOpen}
        onHide={handleMenuVisible}
        placement={"end"}
        style={{ maxWidth: "100%", minwidth: "250px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Widgets</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Tabs
            defaultActiveKey={selectedTabIndex || 0}
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            {copiedCategories.map((category, catindex) => {
              return (
                <Tab eventKey={catindex} title={category.shortId} key={catindex}>
                  {category.widgets.map((widget, widIndex) => {
                    return (
                      <div key={`${widget.name}-${widIndex}`}>
                        <Form.Check // prettier-ignore
                          type={"checkbox"}
                          checked={widget.visible}
                          id={`checkbox-${widget.name}-${widget.id}`}
                          label={widget.name}
                          onChange={() =>
                            handleCheckboxChange(catindex, widIndex)
                          }
                        />
                      </div>
                    );
                  })}
                </Tab>
              );
            })}
          </Tabs>
        </Offcanvas.Body>
        <div
          className="offcanvas-footer"
          style={{
            padding: "1rem",
            borderTop: "1px solid #dee2e6",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleConfirm}
            style={{ marginLeft: "0.5rem" }}
          >
            Confirm
          </Button>
        </div>
      </Offcanvas>
    </>
  );
};

export default AddWidgetModal;
