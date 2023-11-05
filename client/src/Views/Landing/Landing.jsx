// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to</h1>
        <h1 className={styles.subtitle}>PokePortal</h1>
        <Link to={`/home`}>
          <a className={styles.button}>Explore Now</a>
        </Link>
      </header>
      <section className={styles.content}>
        <div className={styles.feature}>
          <h2>Explore and Discover</h2>
          <p>
            View, search, and explore a wide variety of Pokémon species.
            Discover the world of Pokémon at your fingertips.
          </p>
        </div>
        <div className={styles.feature}>
          <h2>Filter and Sort</h2>
          <p>
            Filter and sort Pokémon based on types, abilities, and more. Find
            the perfect Pokémon for your team.
          </p>
        </div>
        <div className={styles.feature}>
          <h2>View Details</h2>
          <p>
            Get in-depth information about each Pokémon, from its
            characteristics to its moves and evolutions.
          </p>
        </div>
        <div className={styles.feature}>
          <h2>Create Your Pokémon</h2>
          <p>
            Create your very own Pokémon with unique abilities and appearances.
            Unleash your creativity as a Pokémon Trainer!
          </p>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>© 2023 PokePortal</p>
      </footer>
    </div>
  );
};

export default Landing;
