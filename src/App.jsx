const data = [
  {
    image: "/images/jordan.jpeg",
    title: "Micheal jordan ",
  },
  {
    image: "/images/ljames.jpeg",
    title: "Lebron James ",
  },
  {
    image: "/images/giannis.jpeg",
    title: "Giannis Antetokoumpo ",
  },
];

function App() {
  return (
    <div className="h-screen bg-slate-800 pt-10">
      <div className="h-[400px] w-3/4 m-auto border">
        {
          data.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <img src={item.image} className="w-60 h-60 object-contain" />
                </div>
                <div className="p-6 bg-blue-500">
                  <p className="font-semibold text-white">{item.title}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}


export default App;
