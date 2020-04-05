import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal'
import './App.css';

const App = () => {

  const [Goals, setGoals] = useState([

    { id: 'cg1', text: 'Play the piano for 1 hour' },
    { id: 'cg2', text: 'Study React' },
    { id: 'cg3', text: 'Eat' }

  ]);

  const addNewGoalHandler = newGoal => {

    //setGoals(Goals.concat(newGoal));
    setGoals(prevGoals => prevGoals.concat(newGoal));

  }

  return (
    <div className="goals">
      <h2>To Do List</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={Goals} />
    </div>
  );

};

export default App;
