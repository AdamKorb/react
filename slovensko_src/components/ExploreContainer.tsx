import './ExploreContainer.css'
import HomePage from '../features/HomePage/homePage';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <section>
      <div id='container'>
      <HomePage/>
      </div>
    </section>
  );
};

export default ExploreContainer;
