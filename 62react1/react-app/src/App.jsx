import './App.css'
import Title from './Title';
import Product from './Product';
import ProductTab from './ProductTab';

function Description() {
  return <h3>This is a description</h3>
}
function App() {

  // return <h1>Hello World!</h1>
  // return <button>hello world!</button>
  // return (
  // <>
  //   <h1>heading</h1>
  //   <Title/>
  //   <Description/>
  //   <Title/>
  //   <Description/>
  // </>
  // );

  return(
    <>
    <ProductTab/>
    </>
  );
}

export default App
