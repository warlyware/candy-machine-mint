import React from 'react'

function Landing(props: any) {
  return (
    <div>
      {props.sanity}
      Hello! { String(props.isMinting) } ?
      <button onClick={props.handleToggleMint}>asdf</button>
    </div>
  );
}

export default Landing
