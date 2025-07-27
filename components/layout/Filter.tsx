import { useState } from "react";
import Pill from "../common/Pill";
import { Filters } from "@/constants";

const FilterSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <div className="flex gap-4 text-nowrap overflow-x-auto p-4">
      {Filters.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          onClick={() => setSelectedFilter(filter)}
          active={selectedFilter === filter}
        />
      ))}
    </div>
  );
};

export default FilterSection;
