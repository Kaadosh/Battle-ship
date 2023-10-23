import React from 'react';

interface FiltersProps {
  filterLevel: string;
  filterNation: string;
  filterType: string;
  onFilterChange: (filterName: string, value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  filterLevel,
  filterNation,
  filterType,
  onFilterChange,
}) => {
  return (
    <div>
      <div>
        <select value={filterLevel} onChange={(e) => onFilterChange('level', e.target.value)}>
          <option value="">All Levels</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
          <option value="4">Level 4</option>
          <option value="5">Level 5</option>
          <option value="6">Level 6</option>
          <option value="7">Level 7</option>
          <option value="8">Level 8</option>
          <option value="9">Level 9</option>
          <option value="10">Level 10</option>
          <option value="11">Level 11</option>
        </select>
      </div>
      <div>
        <select value={filterNation} onChange={(e) => onFilterChange('nation', e.target.value)}>
          <option value="">All Nations</option>
          <option value="japan">japan</option>
          <option value="usa">usa</option>
          <option value="ussr">ussr</option>
          <option value="germany">germany</option>
          <option value="uk">uk</option>
          <option value="france">france</option>
          <option value="pan_asia">pan_asia</option>
          <option value="italy">italy</option>
          <option value="commonwealth">commonwealth</option>
          <option value="pan_america">pan_america</option>
          <option value="europe">europe</option>
          <option value="netherlands">netherlands</option>
          <option value="spain">spain</option>
        </select>
      </div>
      <div>
        <select value={filterType} onChange={(e) => onFilterChange('type', e.target.value)}>
          <option value="">All Types</option>
          <option value="submarine">submarine</option>
          <option value="destroyer">destroyer</option>
          <option value="cruiser">cruiser</option>
          <option value="battleship">battleship</option>
          <option value="aircarrier">aircarrier</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
