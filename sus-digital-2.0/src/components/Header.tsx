import logoGov from '../assets/Gov.br_logo.svg.png';
import profilePic from '../assets/foto-perfil.svg';

const Header = () => {
  return (
    
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      
      <div className="flex items-center gap-4">
        <img src={logoGov} alt="Logo Gov.br" className="h-10" />
        <h1 className="text-xl font-bold text-gray-700">SUS-Digital</h1>
      </div>

      <nav className="hidden md:flex gap-4">
        <button className="text-gray-600 hover:text-blue-500 font-medium px-3 py-2 rounded-md">Inicio</button>
        <button className="text-gray-600 hover:text-blue-500 font-medium px-3 py-2 rounded-md">Agendar</button>
        <button className="text-gray-600 hover:text-blue-500 font-medium px-3 py-2 rounded-md">Histórico</button>
        <button className="text-gray-600 hover:text-blue-500 font-medium px-3 py-2 rounded-md">Sobre nós</button>
      </nav>

      <div className="perfil">
        <img src={profilePic} alt="Foto de Perfil" className="h-12 w-12 rounded-full" />
      </div>
    </header>
  );
};

export default Header;