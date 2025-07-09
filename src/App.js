import { useState } from 'react';
import './App.css';
import GameCard from './components/GameCard';

function App() {
  const games = [
    {
      id: 1,
      name: "The Legend of Zelda: Tears of the Kingdom",
      image: "https://cdn.wccftech.com/wp-content/uploads/2022/09/WCCFzeldatearsofthekingdom2.jpg",
      description: "Explora las vastas tierras y cielos de Hyrule en esta nueva aventura",
      price: 59.99,
      category: "Juegos"
    },
    {
      id: 2,
      name: "PlayStation 5",
      image: "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/PA5.png",
      description: "La nueva generación de consolas con gráficos impresionantes",
      price: 499.99,
      category: "Consolas"
    },
    {
      id: 3,
      name: "Xbox Elite Controller Series 2",
      image: "https://xboxdesignlab.xbox.com/media/wysiwyg/504727_Custom-Hero-1920-1400_1920x1237_01.jpg",
      description: "Control profesional personalizable para Xbox y PC",
      price: 179.99,
      category: "Accesorios"
    },
    {
      id: 4,
      name: "Spider-Man 2",
      image: "https://products.eneba.games/products/EfkHTaWHMgzkqrQaYDqzb9u2LuCEAEUkngBl7528RhY.jpg",
      description: "La nueva aventura del Hombre Araña en PlayStation 5",
      price: 69.99,
      category: "Juegos"
    },
    {
      id: 5,
      name: "Nintendo Switch OLED",
      image: "https://th.bing.com/th/id/R.d770c5c955c14c7249855b48b5b482e0?rik=L0mlB6GcbhzWDg&pid=ImgRaw&r=0",
      description: "La versión mejorada de Nintendo Switch con pantalla OLED",
      price: 349.99,
      category: "Consolas"
    },
    {
      id: 6,
      name: "Razer BlackShark V2 Pro",
      image: "https://th.bing.com/th/id/R.bb1854523b139777e76e04edc898d559?rik=IPWZ%2bpOKclbPlQ&pid=ImgRaw&r=0",
      description: "Auriculares gaming inalámbricos profesionales",
      price: 179.99,
      category: "Accesorios"
    },
    {
      id: 7,
      name: "Warhammer 40000 Space Marine Master Crafted Edition",
      image: "https://files.gamesfull.app/uploads/image/2025/06/Warhammer-40000-Space-Marine-Master-Crafted-Edition.jpg",
      description: "En Warhammer 40,000: Space Marine, eres el capitán Titus, un marine espacial del capítulo de los Ultramarines",
      price: 34.99,
      category: "Juegos"
    }
  ];

  const [filters, setFilters] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
    category: "Todos"
  });

  const handlePriceChange = (type, value) => {
    if (value === "" || (!isNaN(value) && value >= 0)) {
      setFilters(prev => ({
        ...prev,
        [type]: value
      }));
    }
  };

  const filteredGames = games.filter(game => {
    return (
      game.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.minPrice === "" || game.price >= Number(filters.minPrice)) &&
      (filters.maxPrice === "" || game.price <= Number(filters.maxPrice)) &&
      (filters.category === "Todos" || game.category === filters.category)
    );
  });

  const resetFilters = () => {
    setFilters({
      name: "",
      minPrice: "",
      maxPrice: "",
      category: "Todos"
    });
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🎮 GamePark</h1>
      </header>

      <div className="main-content">
        <div className="filters">
          <div className="filters-header">
            <h2>Filtros</h2>
          </div>
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={filters.name}
            onChange={(e) => setFilters({...filters, name: e.target.value})}
          />
          <div className="price-inputs">
            <input
              type="number"
              placeholder="Precio mínimo"
              value={filters.minPrice}
              min="0"
              step="0.01"
              onChange={(e) => handlePriceChange('minPrice', e.target.value)}
            />
            <input
              type="number"
              placeholder="Precio máximo"
              value={filters.maxPrice}
              min="0"
              step="0.01"
              onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
            />
          </div>
          <select
            value={filters.category}
            onChange={(e) => setFilters({...filters, category: e.target.value})}
          >
            <option value="Todos">Todas las categorías</option>
            <option value="Juegos">Juegos</option>
            <option value="Consolas">Consolas</option>
            <option value="Accesorios">Accesorios</option>
          </select>
          <button 
            className="reset-button"
            onClick={resetFilters}
          >
            Limpiar Filtros
          </button>
        </div>

        <div className="games-grid">
          {filteredGames.length > 0 ? (
            filteredGames.map(game => (
              <GameCard key={game.id} {...game} />
            ))
          ) : (
            <div className="no-results">
              <h3>No se han encontrado resultados</h3>
              <p>Intenta ajustar los filtros de búsqueda</p>
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 GamePark - Dastin Chávez - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
