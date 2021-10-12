import React from 'react'

function Landing(props: any) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl md:text-8xl tracking-wider uppercase pixel-font">
        Pixel Plates
      </h1>
      <p className="font-bold text-lg py-8 italic">
        Mint some plates on the Solana blockchain motherfuckers!
      </p>
      <button 
        className="font-bold bg-green-500 p-2 px-4 rounded-lg text-4xl" 
        onClick={props.handleToggleMint}
      >
        MINT
      </button>
    </div>
  );
}

export default Landing
