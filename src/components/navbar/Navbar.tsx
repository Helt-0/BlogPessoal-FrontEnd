import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {



  return (
    <>
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
        <Link to='/home' className='hover:underline'><div className='text-2xl font-bold uppercase'>Blog Pessoal</div></Link>

          <div className='flex gap-4'>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/postagens' className='hover:underline'>Postagens</Link>
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastrarTema' className='hover:underline'>Cadastrar tema</Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to='/sair' className='hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar