import React, { useState, useContext } from "react";
import { DatabaseContext } from "../../context/Database";
import "./CategorySelector.scss";

const CategorySelector = () => {
  const [stateAll, setStateAll] = useState(true);
  const [stateTravel, setStateTravel] = useState(false);
  const [stateLifestyle, setStateLifestyle] = useState(false);
  const [stateBusiness, setStateBusiness] = useState(false);
  const [stateFood, setStateFood] = useState(false);
  const [stateWork, setStateWork] = useState(false);

  const { category, setCategory } = useContext(DatabaseContext);

  // setUpDatabase(database);

  const filterDBBy = (selector) => {
    setCategory(selector);
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
        return;
      }
      case "Travel": {
        setStateAll(false);
        setStateTravel(true);
        setStateLifestyle(false);
        setStateBusiness(false);
        setStateFood(false);
        setStateWork(false);
        return;
      }
      case "Lifestyle": {
        setStateAll(false);
        setStateTravel(false);
        setStateLifestyle(true);
        setStateBusiness(false);
        setStateFood(false);
        setStateWork(false);
        return;
      }
      case "Business": {
        setStateAll(false);
        setStateTravel(false);
        setStateLifestyle(false);
        setStateBusiness(true);
        setStateFood(false);
        setStateWork(false);
        return;
      }
      case "Food": {
        setStateAll(false);
        setStateTravel(false);
        setStateLifestyle(false);
        setStateBusiness(false);
        setStateFood(true);
        setStateWork(false);
        return;
      }
      case "Work": {
        setStateAll(false);
        setStateTravel(false);
        setStateLifestyle(false);
        setStateBusiness(false);
        setStateFood(false);
        setStateWork(true);
        return;
      }
      default: {
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
