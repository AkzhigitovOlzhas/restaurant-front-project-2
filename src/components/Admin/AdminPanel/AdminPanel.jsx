import React from "react";
import { Tab, Tabs } from "react-bootstrap"; 
import {
  AddCategoryTab,
  AddCrossSellsTab,
  AddProductTab,
  Main,
  Reviews,
} from "../Tabs";

export const AdminPanel = () => {
  return (
    <Tabs id="uncontrolled-tab-example" className="bg-white">
      <Tab eventKey="home" title="Главная">
        <div className="bg-white">
          <Main />
        </div>
      </Tab>
      <Tab eventKey="add_category" title="Разное">
        <div className="bg-white">
          <AddCategoryTab />
          <AddCrossSellsTab /> 
        </div>
      </Tab>
      <Tab eventKey="add_product" title="Добавить товар">
        <div className="bg-white">
          <AddProductTab />
        </div>
      </Tab>
      <Tab eventKey="reviews" title="Отзывы">
        <div className="bg-white">
          <Reviews />
        </div>
      </Tab>
    </Tabs>
  );
};
