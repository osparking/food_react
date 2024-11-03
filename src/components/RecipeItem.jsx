import styles from "./recipeitem.module.css";
export default function RecipeItem({ recipe }) {
  return (
    <div className={styles.recipeContainer}>
      <img className={styles.foodImage} src={recipe.image} alt={recipe.title} />
      <div className={styles.recipeText}>
        <p className={styles.recipeName}>피자와 단호박</p>
      </div>
      <button onClick={null}>조리법</button>
      <br />
    </div>
  );
}
