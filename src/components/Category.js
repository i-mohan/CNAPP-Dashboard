import React from "react";
import Widget from "./Widget";
import { Card, Button, Row, Col } from "react-bootstrap";

const Category = ({ category, catIndx, handleMenuVisible }) => {
  return (
    <Card className="mb-4" >
      <Card.Header style={{backgroundColor:'darkblue', color:'white'}}><Card.Title>{category.name}</Card.Title></Card.Header>
      <Card.Body style={{backgroundColor:'white'}}>
        <Row>
          {category.widgets.map((widget, index) =>
            widget.visible ? (
              <Col key={`widget-${widget.id}`} xs={12} md={3}>
                <Widget widget={widget} catIndx={catIndx} widIndx={index} />
              </Col>
            ) : null
          )}
          <Col key={`widget-add-${category.id}`} xs={12} md={3}>
            <Card className="" style={{height: '200px', boxShadow: '3px 3px 3px 3px #a4a4a4'}}>
              <Card.Body style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                <Button variant="primary" onClick={()=>handleMenuVisible(catIndx)}>
                  + Add Widget
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Category;
