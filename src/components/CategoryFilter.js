import React from "react";

function CategoryFilter({categories, setCategory, selectedCategory}) {

 const filteredCategory = categories.map((cat)=> {
  const className= cat === selectedCategory? "selected":null; 
  
  return(
    <button key={cat} 
    onClick={() => setCategory(cat)}
    className = {className}
    >
      {cat}
    </button>
 )
  })

  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {filteredCategory}
    </div>
  );

}

export default CategoryFilter;
