import React from 'react';
import styles from './UI.module.css'

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
    <div className={styles.filter}>
      <div>
        <select className={styles.select} value={filterLevel} onChange={(e) => onFilterChange('level', e.target.value)}>
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
        <select className={styles.select} value={filterNation} onChange={(e) => onFilterChange('nation', e.target.value)}>
          <option value="">All Nations</option>
          <option value="japan">Japan</option>
          <option value="usa">USA</option>
          <option value="ussr">USSR</option>
          <option value="germany">Germany</option>
          <option value="uk">UK</option>
          <option value="france">France</option>
          <option value="pan_asia">Pan Asia</option>
          <option value="italy">Italy</option>
          <option value="commonwealth">Commonwealth</option>
          <option value="pan_america">Pan America</option>
          <option value="europe">Europe</option>
          <option value="netherlands">Netherlands</option>
          <option value="spain">Spain</option>
        </select>
      </div>
      <div>
        <select className={styles.select} value={filterType} onChange={(e) => onFilterChange('type', e.target.value)}>
          <option value="">All Types</option>
          <option value="submarine">Submarine</option>
          <option value="destroyer">Destroyer</option>
          <option value="cruiser">Cruiser</option>
          <option value="battleship">Battleship</option>
          <option value="aircarrier">Air Carrier</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
