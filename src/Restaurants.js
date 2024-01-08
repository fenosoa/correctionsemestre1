export function Restaurants({restaurants, toggleRestaurantStatus}){
    return (
        <section className='restaurants'>
            {restaurants.map((restaurant) => (
                <div key={restaurant.id} className='restaurant'>
                    <img src={restaurant.image} alt={restaurant.name} />
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.isOpen ? "Ouvert" : "Fermé"}</p>
                    <button
                        onClick={() =>
                            toggleRestaurantStatus(restaurant.id)
                        }>
                        Changer l'état
                    </button>
                </div>
            ))}
        </section>
    )
}