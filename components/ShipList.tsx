'use client'
import React, { useEffect, useState } from 'react';
import ShipCard from './ShipCard';
import Filters from '../UI/Filter';
import Pagination from '../UI/Pagination';
import { Ship } from '../data/types';
import styles from './ShipCard.module.css';

const ITEMS_PER_PAGE = 12;

const ShipList: React.FC = () => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterLevel, setFilterLevel] = useState('');
  const [filterNation, setFilterNation] = useState('');
  const [filterType, setFilterType] = useState('');


  useEffect(() => {
    fetch('https://vortex.korabli.su/api/graphql/glossary/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost',
      },
      body: JSON.stringify({
        query: `
          {
            vehicles {
              title
              description
              icons {
                large
                medium
              }
              level
              type {
                name
                title
                icons {
                  default
                }
              }
              nation {
                name
                title
                color
                icons {
                  small
                  medium
                  large
                }
              }
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((data) => setShips(data.data.vehicles))
      .catch((error) => console.error(error));
  }, []);


  const applyFilters = (ship: Ship) => {
    const levelMatch = !filterLevel || ship.level === +filterLevel;
    const nationMatch = !filterNation || ship.nation.name === filterNation;
    const typeMatch = !filterType || ship.type.name === filterType;
    return levelMatch && nationMatch && typeMatch;
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const filteredShips = ships.filter(applyFilters);

  const displayedShips = filteredShips.slice(startIndex, endIndex);

  return (
    <>
      <Filters
        filterLevel={filterLevel}
        filterNation={filterNation}
        filterType={filterType}
        onFilterChange={(filterName, value) => {
          if (filterName === 'level') {
            setFilterLevel(value);
          } else if (filterName === 'nation') {
            setFilterNation(value);
          } else if (filterName === 'type') {
            setFilterType(value);
          }
          setCurrentPage(1);
        }}
      />
      <div className={styles.wrapper}>
        {displayedShips.map((ship, index) => (
          <ShipCard key={index} ship={ship} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredShips.length / ITEMS_PER_PAGE)}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </>
  );
};

export default ShipList;
