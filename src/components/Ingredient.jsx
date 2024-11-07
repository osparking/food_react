import styles from './ingredient.module.css'
export default function Ingredient({ ingredient }) {
  return (
    <div>
      <div className={styles.containAll}>
        <div className={styles.containImage}>
          <img
            src={
              `https://img.spoonacular.com/ingredients_100x100/` +
              ingredient.image
            }
            alt={ingredient.image}
          />
        </div>
        <div className={styles.containEtc}>
          <div className={styles.name}>{ingredient.name}</div>
          <div className={styles.amount}>
            {ingredient.amount} {ingredient.unit}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
