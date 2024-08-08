import React from 'react';

export default function Login() {
    return (
        <>
            <div className="h-96 mb-96">

                {/* <p className='pularLinha'></p> */}

                <h1 style={{ textAlign: 'center', paddingTop: '30px', paddingBottom: '50px', fontSize: '30px', fontWeight: 'bold' }}>Login</h1>

                <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', width: '500px', margin: "0% 32.5%", backgroundColor: 'darkgrey' }}>

                    <form>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <label>Email:</label>
                            <input type="text" name="email" style={{ width: '300px'}}/>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{paddingTop: '20px'}}>Senha:</label>
                            <input type="Password" style={{ width: '300px'}} />
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginTop: '10px',
                            }}>Login</button>
                        </div>

                    </form>


                </div>
            </div>
        </>
    );
}