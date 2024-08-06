import "./App.css";
import { Main, Header, Footer } from "./components";
import { useState } from "react";

function App() {
  const [isDefault, setIsDefault] = useState(true);
  const styles = {
    color: isDefault ? "#000275" : "#ACD3E2",
    headerBackgroundColor: isDefault ? "#ACD3E2" : "#043C50",
    mainBackgroundColor: isDefault ? "#C3DCE6" : "#1E4650",
    buttonBackgroundColor: isDefault ? "#AAD8E6" : "#00027D",
  };
  function changeTheme() {
    setIsDefault((prev) => !prev);
  }
  return (
    <div className="App">
      <Header
        color={styles.color}
        backgroundColor={styles.headerBackgroundColor}
        onClick={changeTheme}
      />
      <Main color={styles.color} backgroundColor={styles.mainBackgroundColor} />
      <Footer
        color={styles.color}
        backgroundColor={styles.headerBackgroundColor}
      />
    </div>
  );
}

export default App;
