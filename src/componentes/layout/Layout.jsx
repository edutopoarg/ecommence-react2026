import Header from "./Header";
import Footer from "./Footer";
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className={styles.contenido}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;