import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

export const mockPizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = mockPizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((item, index) => {
              return (
                <Pizza
                  key={index}
                  name={item.name}
                  ingredients={item.ingredients}
                  photoName={item.photoName}
                  price={+item.price}
                  soldOut={item.soldOut}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Footer() {
  //return React.createElement("footer", null, "We're currently Open");
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // const [isOpen, setOpen] = useState(hour >= openHour && hour <= closeHour);
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  // console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!");
  // }
  // else {
  //   alert("Sorry we're closed");
  // }

  // const wheterRestrauntOpenOrNot = () => {
  //   const hour = new Date().getHours();
  //   const openHour = 12;
  //   const closeHour = 22;
  //   setOpen(hour >= openHour && hour <= closeHour);
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTime(new Date().toLocaleTimeString());
  //     wheterRestrauntOpenOrNot();
  //   }, 1000);
  // }, [time]);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00. and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come vissit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza({ photoName, name, ingredients, price, soldOut }) {
  // if (soldOut) return null;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}
//React v18
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
//React.render(<App/>,document.querySelector("#root"));
