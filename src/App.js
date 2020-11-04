
import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Course from './Components/Course/Course';
import data from './Data/Data.json'

function App() {
  const [courses, setCourses] = useState([]);
  const buttonHandler = newAdded => {
    setCourses([...courses, newAdded])
  };

  const total = courses.reduce((total, course) => total + course.price, 0);
  return (
    <div style={{ display: 'flex' }}>
      <div className="App card-deck" style={{ width: '80%', borderRight: '1px solid lightGray' }}>
        {
          data.map(data => <Course data={data} courses={courses} buttonHandler={buttonHandler}></Course>)
        }
      </div>
      <div style={{ marginLeft: "30px" }}>
        <Cart length={courses.length} total={total}></Cart>
      </div>
    </div>
  );
}

export default App;