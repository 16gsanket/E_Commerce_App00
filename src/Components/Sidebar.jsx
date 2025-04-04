import React, { useState } from "react";
import { useSidebar } from "../context/SidebarProvider ";
import { useFilterContext } from "../context/FilterContextProvider";

const categories = [
  { label: "All", value: "all" },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
  { label: "Jewelery", value: "jewelery" },
  { label: "Electronics", value: "electronics" },
];

function Sidebar() {
  // categories : men's clothing, jewelery, electronics, women's clothing , all
  const { isSidebarOpen } = useSidebar();
  const [isChecked, setIsChecked] = useState(false);
  const{priceCap , setPriceCap , category , setCategory} = useFilterContext();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  const handlePriceChange = (event) => {
    setPriceCap(Number(event.target.value));
  };

  return (
    <div
      className={`fixed top-[56px] left-0 h-[calc(100dvh-56px)] w-[70vw] sm:w-[250px] bg-white shadow-md transition-transform duration-300 z-50 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Filters</h2>
        <div className="border-b border-gray-300 mb-5"></div>

        {/* Category Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat.value}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  value={cat.value}
                  checked={category === cat.value}
                  onChange={() => handleCategoryChange(cat.value)}
                  className="accent-indigo-600"
                />
                <span className="text-gray-700">{cat.label}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Price Cap */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Price Filter
          </h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceCap}
              onChange={handlePriceChange}
              className="w-full accent-indigo-600"
            />
            <div className="text-gray-700 text-center">
              Maximum Price: ${priceCap}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
