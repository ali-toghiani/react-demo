import reactCoreConceptsImg from './assets/react-core-concepts.png'
import {CORE_CONCEPTS} from './data'

function Header() {
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core']
  function getRandomDescription(){
    const ranIndex = Math.floor(Math.random() * reactDescriptions.length)
    return reactDescriptions[ranIndex];
  }
  return (
    <header>
        <img src={reactCoreConceptsImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {getRandomDescription()} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcepts(props){
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
