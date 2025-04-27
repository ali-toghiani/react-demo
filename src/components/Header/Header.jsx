import reactCoreConceptsImg from '../../assets/react-core-concepts.png'
import './Header.css'

export default function Header() {
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