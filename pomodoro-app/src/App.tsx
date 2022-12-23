import React from 'react'
import { PomodoroTimer } from './components/pomodoro-timer'

function App() {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={1}
        shortRestTime={1}
        longRestTime={3}
        cycles={4}
      />
    </div>
  );
}

export default App
