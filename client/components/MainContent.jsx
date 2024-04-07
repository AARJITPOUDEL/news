import styles from "./MainContent.module.css";

const MainContent = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.popularNews}>
          <h2 className={styles.newsTitle}>Popular News</h2>
          <div className={styles.newsItem}>
            <img src="news-photo.jpg" alt="News" className={styles.newsPhoto} />
            <div>
              <h3 className={styles.newsHeading}>News Title</h3>
              <p className={styles.newsDescription}>
                News description goes here...
              </p>
            </div>
          </div>
        </div>
        <div className={styles.newsCategories}>
          <h2 className={styles.categoryTitle}>News Categories</h2>
          <ul className={styles.categoryList}>
            <li>
              <a href="#" className={styles.categoryLink}>
                Category 1
              </a>
            </li>
            <li>
              <a href="#" className={styles.categoryLink}>
                Category 2
              </a>
            </li>
            <li>
              <a href="#" className={styles.categoryLink}>
                Category 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
