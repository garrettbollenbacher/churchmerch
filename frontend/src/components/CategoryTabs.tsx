interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-2">
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedCategory === ""
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
        onClick={() => onSelectCategory("")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};
