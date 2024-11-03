import pizzaPumpkin from './images/pizza-pumpkin.jpg'
export default function RecipeItem({ recipe }) {
  return (
    <div style={{marginTop: '20px'}}>
      <img src={pizzaPumpkin} alt="피자와 단호박" />
      <h1>피자와 단호박</h1>
      <button onClick={null}>조리법</button>
      <br />
    </div>
  );
}
