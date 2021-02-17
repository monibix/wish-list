import React from 'react'
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import ListItem from './components/ListItem/ListItem';

function App() {
  let wishList = ["1. First Wish","2.Second Wish"]
  let anotherWish = "3.Third wish"
  wishList.push(anotherWish)

  //Estado con array de Wishes y función para actualizar este estado. 
  const [wishes, setWishList] = React.useState(wishList)

  //Función para añadir un nuevo wish al array de wishes, que la pasamos por props a Form porque el nuevo wish está en Form. 
  const handleNewWish = (newWish) => setWishList(wishes=>wishes.concat(newWish))

  //Función para borrar un wish del array, que la pasamos por props a través de List --> ListItem --> Button, y allí ejecutarla. 
  const handleDelete = (wish) => {
    const wishesCopy = [...wishes];
    setWishList(wishesCopy.filter((wishes) => wishes !== wish ))
  }

  return (
    <div className="container">
      <h1>App</h1>

      <div>
        <List wishList={wishes} handleDelete={handleDelete}>
          <ListItem />
        </List>
      </div>

      <div>
        <Form 
          onSubmit={handleNewWish}
        />
      </div>

    </div>
  );
}

export default App;

