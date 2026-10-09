import React from 'react';

export function Update() {
  return (
    <main>
      <div>
        <img src="assets/imgs/dev/Account-Image-Generic.png" class="avatar-img-small">
        <span class="score-text-midgame"> -> 500</span>
      </div>
      <div>
        <span>(me)</span>
        <img src="assets/imgs/dev/Account-Image-Generic.png" class="avatar-img-small">
        <span class="score-text-midgame"> -> 300</span>
      </div>
      <div>
        <img src="assets/imgs/dev/Account-Image-Generic.png" class="avatar-img-small">
        <span class="score-text-midgame"> -> 200</span>
      </div>
      <div>
        <img src="assets/imgs/dev/Account-Image-Generic.png" class="avatar-img-small">
        <span class="score-text-midgame"> -> 450</span>
      </div>
      <div>
        <p>&lt;player1&gt; and &lt;player2&gt; farmed, &lt;player3&gt; guarded, &lt;player4&gt; plundered</p>
        <p>Successful defense!</p>
        <p>&lt;player1&gt; +60 (100 farmed - 40 tax) -> 300</p>
        <p>&lt;player2&gt; +60 (100 farmed - 40 tax) -> 500</p>
        <p>&lt;player3&gt; +80 (tax from defending 2 farmers) -> 450</p>
        <p>&lt;player4&gt; +0 (failed attack) -> 200</p>
      </div>
      <hr />
      <form method="get" action="gamepage-finished.html">
        <button type="submit" class="btn technical-button farming-color-normal">Farm</button>
        <button type="submit" class="btn technical-button">Guard</button>
        <button type="submit" class="btn technical-button">Plunder</button>
      </form>
    </main>
  );
}