import React, { useEffect, useState } from 'react'

export const App = () => {
    const [products, setProducts] = useState([])


    return (
        <div>
            <header>
                <Navbar cart={[]} />
            </header>

            <main className="container">
                <Switch>
                    <Route exact path='/' render={() => <Home user={{}} />} />
                    <Route exact path='/products' render={() => <Products />} />
                </Switch>
            </main>

            <footer>

            </footer>
        </div>
    )
}
