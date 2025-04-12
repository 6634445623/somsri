import styles from '../styles/home.module.css';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <main className={styles.mainContent}>
        <h1>About Us</h1>
        <p>Welcome to SOMSRI - Absolute Cinema!</p>
        <p>We bring you the best concerts from around the world, ensuring an unforgettable experience every time.</p>
        <p>Our mission is to connect fans with their favorite artists in the most spectacular venues.</p>
      </main>
    </Layout>
  );
}