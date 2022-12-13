import Form from "./components/Form/Form";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import ImgGallery from "./pages/ImgGallery/ImgGallery";
import LanguageProvider from "./store/LanguageProvider";
const App = () => {
  return (
    <LanguageProvider>
      <Hero />
      <About />
      <ImgGallery />
      <Form />
    </LanguageProvider>
  );
};

export default App;
