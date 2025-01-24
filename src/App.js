import './App.css';

function App() {
  const City={
    name:"Одесса",
    description:"Город был основан в 1794 году и с тех пор стал важным портом и культурным центром региона. Одесса также известна своим юмором, теплым климатом и уютными двориками.",
    img:"odessa.jpg"
  }

  const Recipe = {
    name: "Борщ",
    description:
      "Борщ — это традиционное украинское блюдо, приготовленное на основе свеклы. Оно включает множество ингредиентов, таких как капуста, картофель, морковь, лук, свекла и мясо. Борщ подаётся с ложкой сметаны и свежей зеленью.",
    image: "borsh.jpg",
  };

  return (
    <div>
      <h1>{City.name}</h1>
      <p>{City.description}</p>
      <img src={City.img}></img> 

      <h1>{Recipe.name}</h1>
      <p>{Recipe.description}</p>
      <img src={Recipe.image}></img>
    </div>
  );
}

export default App;
