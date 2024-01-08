import { BurgerBlock } from "./BurgerBlock"
import Macdo from "./images.jpg";
import Kebab from "./kebab.jpg";
import KFC from "./kfc.jpeg";
import Sandwich from "./sandwich.jpg";

export default function Burgers({addToCart, removeFromCart}){
    return (
        <section className='shops'>
            <div className='container'>
                <div className='shops--title'>
                    <h1>Offres du jour</h1>
                </div>
                <div className='shopsblocks'>
                    <BurgerBlock
                        imagePath={Macdo}
                        burgerName='Menu MacDo™'
                        price='12,50 €'
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                    <BurgerBlock
                        imagePath={Kebab}
                        burgerName='Kebab™'
                        price='8,50 €'
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                    <BurgerBlock
                        imagePath={KFC}
                        burgerName='KFC™'
                        price='10,00 €'
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                    <BurgerBlock
                        imagePath={Sandwich}
                        burgerName='Sandwich™'
                        price='3,50 €'
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                </div>
            </div>
        </section>
    )
}