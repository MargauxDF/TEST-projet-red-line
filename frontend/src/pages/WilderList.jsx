import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import CardWilder from "../components/CardWilder";
import styles from "./WilderList.module.css";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

function WilderList() {
  const [wilders, setWilders] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const limitPerPage = 3;
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultPage = 1;
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page"), 10) || defaultPage
  );

  useEffect(() => {
    setSearchParams((params) => {
      params.set("page", currentPage);
      if (currentPage === 1) {
        return undefined;
      }
      return params;
    });
    axios
      .get(`${apiBaseUrl}/wilders?page=${currentPage}`)
      .then((response) => {
        setWilders(response.data.datas);
        // permet d'obtenir le nb de pages entières nécessaires pour afficher toutes les données
        setMaxPage(Math.ceil(response.data.total / limitPerPage));
      })
      .catch((err) => console.error(err));
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <div className={styles.buttons_container}>
        <button
          type="button"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        {currentPage} / {maxPage}
        <button
          type="button"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === maxPage}
        >
          Suivant
        </button>
      </div>
      <div className={styles.cards_container}>
        {wilders.map((wilder) => (
          <CardWilder key={wilder.id} wilder={wilder} />
        ))}
      </div>
    </div>
  );
}

export default WilderList;
