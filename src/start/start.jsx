import React from 'react';

export function Start() {
  return (
    <main>
        <div>
          <p>
            How to play: each round, decide whether you want to <span class="farming-bold">farm</span>, <span class="guarding-bold">guard</span>, or <span class="plundering-bold">plunder</span>.
            Each farmer produces 100 points for themselves base. However:
          </p>
          <ul>
            <li>If there is more plunderers than guards, the plunders steal all the round's points and divide them between themselves</li>
            <li>Each guard "taxes" each farmer 20 points for defense.
                If they actually defend an attack (there is more than 0 plunderers) they take 40 (each) from each farmer</li>
          </ul>
          <p>
            Whoever has the most points at the end wins. Good luck!
          </p>
        </div>
      <hr />
      <form method="get" action="gamepage-processing.html">
        <button type="submit" class="btn technical-button farming-color-normal">Farm</button>
        <button type="submit" class="btn technical-button guarding-color-normal">Guard</button>
        <button type="submit" class="btn technical-button plundering-color-normal">Plunder</button>
      </form>
    </main>
  );
}