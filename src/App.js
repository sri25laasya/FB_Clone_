// external dependencies 
import React from 'react';

// componenet styles
import './App.css';

// sub components 
import BottomFooter from './components/BottomFooter';
import Navigation from './components/Navigation';
import Container from './components/Container';

/** TODO: Finish this
 * 
 * @returns 
 */
function App() {

  let bottomText = "Some text to appear at the bottom"
  let  user1= "John Nicholson"

  return (
    <>
      <Navigation person1={user1} />
      <Container/>
      <BottomFooter footerText={bottomText} />
    </>
  );
}
export default App;