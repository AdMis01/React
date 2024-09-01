import Card from "./Card.jsx"
import Button from "./Button.jsx";
//Dodatkowe sposoby na stylowanie elementow za pomoca CSS

//EXTERNAL - tak jak normalne dodanie tego w pliku index.css
//MODULES - utworzenie dodatkowego pliku nie trzeba tworzyc specjalnie nowego folderu jak tutaj (najlepiej jak by sie znajdowaly w tym samym folderze)
//INLINE - utworzenie tego w js poprostu we funkcji obiektu, nie polecany do duzych projektow czesto tylko do pojedynczych obiektow


function App() {
  return(
    <>
      <Card></Card>
      <Button></Button>

    </>
  );

}

export default App
