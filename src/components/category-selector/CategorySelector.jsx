import React, { useState } from "react";
import "./CategorySelector.scss";

const CategorySelector = () => {
  const [stateAll, setStateAll] = useState(true);
  const [stateTravel, setStateTravel] = useState(false);
  const [stateLifestyle, setStateLifestyle] = useState(false);
  const [stateBusiness, setStateBusiness] = useState(false);
  const [stateFood, setStateFood] = useState(false);
  const [stateWork, setStateWork] = useState(false);

  const filterDBBy = (selector) => {
    console.log(selector);
    setActiveItem(selector);
  };

  const setActiveItem = (value) => {
    switch (value) {
      case "All": {
        setStateAll(true);
        setStateTravel(false);
        setStateLifestyle(false);
        setStateBusiness(false);
        setStateFood(false);
        setStateWork(false);
        break;
      }
      case "Travel": {
        setStateAll(false);
        setStateTravel(true);
        setStateLifestyle(false);
        setStateBusiness(false);
        setStateFood(false);
        setStateWork(false);
        break;
      }
      case "Lifestyle": {
        setStateAll(false);
        setStateTravel(false);
        setStateLifestyle(true);
        setStateBusiness(false);
        setStateFood(false);
        setStateWork(false);
        break;
      }
      case "Business": {
        setStateAll(false);
        setStateTravel(false);
        setStateLifestyle(false);
        setStateBusiness(true);
        setStateFood(false);
        setStateWork(false);
        break;
      }
      case "Food": {
        setStateAll(false);
        setStateTravel(false);
        setStateLifestyle(false);
        setStateBusiness(false);
        setStateFood(true);
        setStateWork(false);
        break;
      }
      case "Work": {
        setStateAll(false);
        setStateTravel(false);
        setStateLifestyle(false);
        setStateBusiness(false);
        setStateFood(false);
        setStateWork(true);
        break;
      }
      default: {
        console.log("Hubo un error");
        break;
      }
    }
  };

  return (
    <section className="category-selector">
      <article className="category-selector-container">
        <div className="category-selector-menu">
          <ul>
            <li
              onClick={() => filterDBBy("All")}
              className={`category-selector-option ${stateAll ? "active" : ""}`}
            >
              All
            </li>
            <li
              onClick={() => filterDBBy("Travel")}
              className={`category-selector-option ${
                stateTravel ? "active" : ""
              }`}
            >
              Travel
            </li>
            <li
              onClick={() => filterDBBy("Lifestyle")}
              className={`category-selector-option ${
                stateLifestyle ? "active" : ""
              }`}
            >
              Lifestyle
            </li>
            <li
              onClick={() => filterDBBy("Business")}
              className={`category-selector-option ${
                stateBusiness ? "active" : ""
              }`}
            >
              Business
            </li>
            <li
              onClick={() => filterDBBy("Food")}
              className={`category-selector-option ${
                stateFood ? "active" : ""
              }`}
            >
              Food
            </li>
            <li
              onClick={() => filterDBBy("Work")}
              className={`category-selector-option ${
                stateWork ? "active" : ""
              }`}
            >
              Work
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default CategorySelector;
