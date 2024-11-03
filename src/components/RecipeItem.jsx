import pizzaPumpkin from "./images/pizza-pumpkin.jpg";
import styles from "./recipeitem.module.css";
export default function RecipeItem({ recipe }) {
  return (
    <div className={styles.recipeContainer}>
      <img
        className={styles.foodImage}
        src={pizzaPumpkin}
        alt="피자와 단호박"
      />
      <div className={styles.recipeText}>
        <p className={styles.recipeName}>피자와 단호박</p>
      </div>
      <button onClick={null}>조리법</button>
      <br />
    </div>
  );
}
