import Chat from "components/Chat";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        backgroundColor: "lightGray",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#ffffd9",
          marginTop: "-50px",
          height: "90vh",
          width: "90vw",
          boxShadow: "-1px 4px 20px -6px rgba(0,0,0,0.75)",
          position: "relative",
        }}
      >
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
