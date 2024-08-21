import React from "react";
import { Card, CloseButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleWidget } from "../redux/widgetsSlice";

const Widget = ({ catIndx, widIndx, widget }) => {
  const dispatch = useDispatch();

  const handleToggleWidget = () => {
    dispatch(toggleWidget({ catIndx, widIndx }));
  };

  return (
    <Card className="widget-card mb-2" style={{ height: "200px", boxShadow: '3px 3px 3px 3px #a4a4a4' }}>
      <div className="widget-header">
        <Card.Title className="card-title">{widget.name}</Card.Title>
          <CloseButton
            className="close-button"
            onClick={() => handleToggleWidget(catIndx, widIndx)}
          />
      </div>
      <Card.Body>
        <Card.Text>{widget.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Widget;
