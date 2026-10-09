import React from 'react';

export function Landing() {
  return (
    <main>
        <form method="get" action="gamepage-start.html">
          <span>Welcome, &lt;username&gt;!</span>
          <p>Enter game code below, or leave blank to start a new game:</p>
          <input type="number" placeholder="Game Code" />
          <button type="submit" className="btn technical-button btn-success">Start Game</button>
        </form>
    </main>
  );
}