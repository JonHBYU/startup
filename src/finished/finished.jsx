import React from 'react';

export function Finished() {
  return (
    <main>
      <h2>KYLE WINS!</h2>
      <div>
        <img src="assets/imgs/dev/Account-Image-Generic.png" class="avatar-img-small">
        <p>500</p>
      </div>
      <hr />
      <div>
        <img src="assets/imgs/dev/Account-Image-Generic.png" class="avatar-img-small">
        <p>300</p>
      </div>
      <hr />
      <div>
        <img src="assets/imgs/dev/Account-Image-Generic.png" class="avatar-img-small">
        <p>200</p>
      </div>
      <hr />
      <div>
        <img src="assets/imgs/dev/Account-Image-Generic.png" class="avatar-img-small">
        <p>450</p>
      </div>
      <hr />
      <form method="get" action="landing.html">
        <button type="submit" class="btn technical-button warning-color">Exit</button>
      </form>
    </main>
  );
}