import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({selectedCategory, setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => {
      return (
        <button
          className="category-btn"
          style={{
            background: selectedCategory === category.name && "#fc1503",
            color: "#fff",
          }}
          key={category.name}
          onClick={() => {setSelectedCategory(category.name)}}
        >
          <span
            style={{
              color: selectedCategory === category.name ? "white" : "red",
              marginRight: 15,
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: selectedCategory === category.name ? 1 : 0.5 }}
          >
            {category.name}
          </span>
        </button>
      );
    })}
  </Stack>
);

export default SideBar;
