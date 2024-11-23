import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap'
function App() {


  return (
    <div>
      {/*<NavbarComponent/>*/}
      <NavbarReactBootstrap/>
      <ItemListContainer greeting='Bienvenidos a Domenicos' texto='jhcjsdjvsdbjvbsjdvb'/>
      
    </div>
  )
}

export default App
