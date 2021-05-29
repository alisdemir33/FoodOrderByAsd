import React,{useState} from 'react'
import Header from './Components/Header/Header'
import BackgroundImage from './Components/Header/BackgroundImage'
import MealsSummary from './Components/MealsSummary/MealsSummary'
import AvailableMeals from './Components/AvailableMeals/AvailableMeals'
import ErrorModal from './UI/Modal'
import CartForm from './Components/Cart/CartForm'

function App() {
  const [showCartFormState, setShowCartFormState] = useState(true);
 // const [errorMessage, setErrorMessage] = useState('');

  const closeCartForm = () => {
    console.log('RUNNED1')
    setShowCartFormState(false);
  }

  const showCartForm = () =>{
    console.log('RUNNED')
    setShowCartFormState(true);
  }  

  console.log('show cart'+showCartFormState);
  return (
  
    <div>
       
       {showCartFormState && 
       <ErrorModal title="Cart List"  onClose={closeCartForm}>
         {<CartForm></CartForm>} 
       </ErrorModal>}

       <Header clickHandler={showCartForm}></Header>       
       <BackgroundImage></BackgroundImage>
       <MealsSummary></MealsSummary>
       <AvailableMeals></AvailableMeals>
    </div>
  );
}

export default App;
