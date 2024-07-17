import perfil from "./assets/eu-perfil.jpeg";
import Profile from "./components/Profile";

function App() {
  return (
  <>
    <div className="app">
      <Profile
        avatar={perfil}
        name="Tiago Henrique dos Reis"
        bio="FullStack JavaScript Developer"
        email="ttrpk@hotmail.com"
        phone="(37)99943-1198"
        githubUrl="https://github.com/tiagotpk"
        linkedinUrl="https://www.linkedin.com/in/tiagotpk/"
        instaUrl="https://www.instagram.com/tiagotpk/"
      />
    </div>
  </>
  )
}

export default App;
