import React from "react";
import ReactDOM from "react-dom";
import cl from "./SortTab.module.css";
import SearchSelect from "../select/SearchSelect";
import { CSSTransition } from "react-transition-group";
import "../../../App.css";
import CheckList from "../checkbox/CheckList";
import { useState } from "react";

const SortTab = ({ filter, setFilter, active, setActive }) => {
  const [optionsDifficulty, setOptionsDifficulty] = useState([
    { id: 0, label: "Any", value: true },
    { id: 1, label: "Easy", value: false },
    { id: 2, label: "Medium", value: false },
    { id: 3, label: "Difficult", value: false },
  ]);

  const [optionsDate, setOptionsDate] = useState([
    { id: 0, label: "Any", value: true },
    { id: 1, label: "Last month", value: false },
    { id: 2, label: "Last 6 month", value: false },
    { id: 3, label: "Last year", value: false },
  ]);

  const isDisabled = () => {
    if (filter.sort === "category") {
      return true;
    }
    return false;
  };

  return (
    <CSSTransition in={active} timeout={200} classNames="sortTab" unmountOnExit>
      <div className={cl.sortTab}>
        <div className={cl.filterMain}>
          <h2>Search by:</h2>
          <SearchSelect
            value={filter.sort}
            onChange={(selectedSort) =>
              setFilter({ ...filter, sort: selectedSort })
            }
            defaultValue={"question"}
            options={[
              { value: "question", name: "Question" },
              { value: "category", name: "Category" },
            ]}
          />
        </div>
        <div className={cl.filter}>
          <h2 style={isDisabled() ? { color: "#999999" } : {}}>Difficulty:</h2>
          <CheckList
            options={optionsDifficulty}
            setOptions={setOptionsDifficulty}
            selectedValue={filter.difficulty}
            prevSelect={filter.difficulty}
            isDisabled={isDisabled()}
            onChange={(selectedDiff) =>
              setFilter({ ...filter, difficulty: selectedDiff })
            }
          ></CheckList>
        </div>
        <div className={cl.filter}>
          <h2 style={isDisabled() ? { color: "#999999" } : {}}>Date:</h2>
          <CheckList
            options={optionsDate}
            setOptions={setOptionsDate}
            selectedValue={filter.date}
            prevSelect={filter.date}
            isDisabled={isDisabled()}
            onChange={(selectedDate) =>
              setFilter({ ...filter, date: selectedDate })
            }
          ></CheckList>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SortTab;
