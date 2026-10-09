import React from 'react';

export function Processing() {
  return (
    <main>
      <div>
        <img src="assets/imgs/dev/Account-Image-Generic.png" className="avatar-img-small">
        <span className="score-text-midgame"> -> 500</span>
      </div>
      <div>
        <span>(me)</span>
        <img src="assets/imgs/dev/Account-Image-Generic.png" className="avatar-img-small">
        <span className="score-text-midgame"> -> 300</span>
      </div>
      <div>
        <img src="assets/imgs/dev/Account-Image-Generic.png" className="avatar-img-small">
        <span className="score-text-midgame"> -> 200</span>
      </div>
      <div>
        <img src="assets/imgs/dev/Account-Image-Generic.png" className="avatar-img-small">
        <span className="score-text-midgame"> -> 450</span>
      </div>
      <div>
        <p>Everyone selected an option. Processing results...</p>
      </div>
      <hr />
      <form method="get" action="gamepage-update.html">
        <button type="submit" className="btn technical-button disabled-button">Farm</button>
        <button type="submit" className="btn technical-button disabled-button">Guard</button>
        <button type="submit" className="btn technical-button disabled-button">Plunder</button>
      </form>
    </main>
  );
}