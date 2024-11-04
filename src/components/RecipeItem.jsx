import styles from "./recipeitem.module.css";
export default function RecipeItem({ recipe, setClickedId }) {
  return (
    <div className={styles.recipeContainer}>
      <img className={styles.foodImage} src={recipe.image} alt={recipe.title} />
      <div className={styles.recipeText}>
        <p className={styles.recipeName}>{recipe.title}</p>
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
