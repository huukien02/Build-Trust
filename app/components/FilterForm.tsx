"use client";

import React, { useState } from "react";
import { TextField, MenuItem, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface FilterProps {
  categories: string[];
  years: number[];
  onFilter: (filter: {
    name: string;
    category: string;
    year: number | null;
  }) => void;
}

const FilterForm: React.FC<FilterProps> = ({ categories, years, onFilter }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState<number | null>(null);

  const handleFilter = () => {
    onFilter({ name, category, year });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-4 items-center justify-end">
      {/* Search by Name */}
      <TextField
        variant="outlined"
        placeholder="Tìm theo tên..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        size="small"
        className="w-full md:w-64"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="text-gray-400" />
            </InputAdornment>
          ),
        }}
      />

      {/* Select Category */}
      <TextField
        select
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        size="small"
        className="w-full md:w-48"
      >
        <MenuItem value="">Tất cả danh mục</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>

      {/* Select Year */}
      <TextField
        select
        variant="outlined"
        value={year ?? ""}
        onChange={(e) => setYear(Number(e.target.value))}
        size="small"
        className="w-full md:w-32"
      >
        <MenuItem value="">Tất cả năm</MenuItem>
        {years.map((y) => (
          <MenuItem key={y} value={y}>
            {y}
          </MenuItem>
        ))}
      </TextField>

      {/* Filter Button */}
      <button
        onClick={handleFilter}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition-colors duration-200"
      >
        Lọc
      </button>
    </div>
  );
};

export default FilterForm;
