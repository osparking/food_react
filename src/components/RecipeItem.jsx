import pizzaPumpkin from './images/pizza-pumpkin.jpg'
import styles from './recipeitem.module.css';
export default function RecipeItem({ recipe }) {
  return (
    <div className={styles.recipeContainer}>
      <img src={pizzaPumpkin} alt="피자와 단호박" />
      <h1>피자와 단호박</h1>
      <button onClick={null}>조리법</button>
      <br />
    </div>
  );
}
