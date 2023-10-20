
export const Home = () => {
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover', // Ajusta el tamaño de la imagen al contenedor
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        backgroundPosition: 'center center', // Alinea la imagen al centro
        minHeight: '100vh', // Ajusta la altura para que la imagen cubra toda la pantalla
    };

    return (
        <div className="container" style={containerStyle}>
        
        </div>
        
    );
}

