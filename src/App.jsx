export default function App() {

const products = [

{ name: "Rand 150R", price: "900 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Rand 250R", price: "1450 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Rand 500R", price: "2600 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Rand 1000R", price: "4800 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Rand 3500R", price: "16400 MZN", image: "https://i.imgur.com/UPrs1EW.png" },

{ name: "Euro 10€", price: "1300 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },
{ name: "Euro 20€", price: "2300 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },
{ name: "Euro 30€", price: "3000 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },
{ name: "Euro 40€", price: "3850 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },
{ name: "Euro 50€", price: "4700 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },
{ name: "Euro 100€", price: "9300 MZN", image: "https://i.imgur.com/Q7ZVQYk.png" },

{ name: "Dollar 10$", price: "1200 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Dollar 20$", price: "1850 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Dollar 25$", price: "2750 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Dollar 50$", price: "4500 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Dollar 75$", price: "6500 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Dollar 100$", price: "8300 MZN", image: "https://i.imgur.com/UPrs1EW.png" },

{ name: "Libra 10", price: "1600 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Libra 20", price: "2700 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Libra 30", price: "4150 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Libra 50", price: "6250 MZN", image: "https://i.imgur.com/UPrs1EW.png" },
{ name: "Libra 100", price: "11500 MZN", image: "https://i.imgur.com/UPrs1EW.png" },

{ name: "Brasil 35", price: "800 MZN", image: "https://i.imgur.com/L3GjK9Y.png" },
{ name: "Brasil 60", price: "1300 MZN", image: "https://i.imgur.com/L3GjK9Y.png" },
{ name: "Brasil 100", price: "2200 MZN", image: "https://i.imgur.com/L3GjK9Y.png" },
{ name: "Brasil 250", price: "4600 MZN", image: "https://i.imgur.com/L3GjK9Y.png" },
{ name: "Brasil 520", price: "8700 MZN", image: "https://i.imgur.com/L3GjK9Y.png" }

];

return (
<div style={{
background:"#050505",
minHeight:"100vh",
color:"white",
fontFamily:"Arial",
padding:"20px"
}}>

  <h1 style={{
    textAlign:"center",
    color:"gold",
    fontSize:"45px"
  }}>
    🎮 Key's Gift Store
  </h1>

  <p style={{
    textAlign:"center",
    color:"#ccc",
    fontSize:"18px"
  }}>
    Premium Gift Cards • Netflix • PSN • Steam • FF
  </p>

  <div style={{
    background:"#111",
    padding:"20px",
    borderRadius:"15px",
    marginTop:"20px",
    border:"1px solid gold",
    textAlign:"center"
  }}>

    <h2 style={{color:"gold"}}>
      💳 Formas de Pagamento
    </h2>

    <p>📲 e-Mola: 872230470</p>
    <p>🏦 BIM disponível</p>
    <p>🌍 PayPal em breve</p>

  </div>

  <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
    gap:"20px",
    marginTop:"40px"
  }}>

    {products.map((item,index)=>(

      <div key={index} style={{
        background:"#111",
        borderRadius:"15px",
        overflow:"hidden",
        border:"1px solid gold"
      }}>

        <img
          src={item.image}
          style={{
            width:"100%",
            height:"180px",
            objectFit:"cover"
          }}
        />

        <div style={{padding:"15px"}}>

          <h2>{item.name}</h2>

          <p style={{
            color:"gold",
            fontSize:"22px",
            fontWeight:"bold"
          }}>
            {item.price}
          </p>

          <a href="https://wa.me/258872230470">

            <button style={{
              width:"100%",
              padding:"12px",
              background:"gold",
              border:"none",
              borderRadius:"10px",
              cursor:"pointer",
              fontWeight:"bold"
            }}>
              💬 Comprar no WhatsApp
            </button>

          </a>

        </div>

      </div>

    ))}

  </div>

</div>

);
 }
