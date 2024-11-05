import styles from "./recipeitem.module.css";
import pizzaPumpkin from './images/pizza-pumpkin.jpg'
export default function RecipeItem({ recipe, setClickedId }) {
  const recipeTitle = "피자와 단호박";
  return (
    <div className={styles.recipeContainer}>
      {/* <img className={styles.foodImage} src={recipe.image} alt={recipe.title} /> */}
      <img className={styles.foodImage} src={pizzaPumpkin} alt={recipeTitle} />
      <div className={styles.recipeText}>
        <p className={styles.recipeName}>{recipeTitle}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.viewButton}
          onClick={() => {
            setClickedId(recipe.id);
          }}
        >
          조리법
        </button>
      </div>
      <br />
    </div>
  );
}
