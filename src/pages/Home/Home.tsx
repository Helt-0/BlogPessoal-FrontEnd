import React from 'react';
// import homeLogo from '../../assets/home.png'
// import './Home.css';


function Home() {
  return (
    <>
    <div >
      <div className="bg-indigo-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ paddingTop: '20px', paddingBottom: '5px', fontSize: '30px', fontWeight: 'bolder'}}>Home</h1>
            

            <div className="flex justify-around gap-4">

              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
            </div>
          </div>
          {/* <div className="flex justify-center "> */}
          {/* <img src="https://i.imgur.com/azdJUuT.jpeg" alt="Paisagem Tela inicial" className='w-2/3' /> */}

          {/* </div> */}
        </div>
      </div>

    </>
  );
}

export default Home;