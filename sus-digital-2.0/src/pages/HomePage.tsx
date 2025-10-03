import ServiceCard from '../components/ServiceCard';
import agendarIcon from '../assets/agendar 1.svg'; 

const HomePage = () => {
    return (
        <main className="p-8">
            {/* ... */}
            <div className="grid md:grid-cols-3 gap-8 mt-10">
                <ServiceCard 
                    iconUrl={agendarIcon} 
                    title="Agendar Consulta" 
                    altText="Ícone de calendário" 
                />
                {/* ... outros cards */}
            </div>
        </main>
    )
}

export default HomePage;