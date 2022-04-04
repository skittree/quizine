import React from "react";
import MyInput from "../UI/input/MyInput";
import SearchButton from "../UI/button/SearchButton";
import SortTab from "../UI/sortTab/SortTab";
import cl from "./ClueFilter.module.css";

const ClueFilter = ({ filter, setFilter, setModalTab, modalTab }) => {
  return (
    <div className={cl.body}>
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <div className={cl.main}>
        <div className={cl.btns}>
          {modalTab ? (
            <SearchButton onClick={() => setModalTab(false)}>Hide</SearchButton>
          ) : (
            <SearchButton onClick={() => setModalTab(true)}>
              Advanced Search
            </SearchButton>
          )}

          <SearchButton>Sort by...</SearchButton>
        </div>
      </div>

      <SortTab
        filter={filter}
        setFilter={setFilter}
        active={modalTab}
        setActive={setModalTab}
        onChange={(filter) => {
          setFilter(filter);
        }}
      ></SortTab>
    </div>
  );
};

export default ClueFilter;
