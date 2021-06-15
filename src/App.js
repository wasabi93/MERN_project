import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import { useDispatch } from 'react-redux';

import useStyles from './styles'
import NavBar from './components/navbar/NavBar';
import HowItWorks from './pages/howitworks/HowItWorks';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Album from './pages/album/Album'
import ContactUs from './pages/contact/ContactUs';
import ListProducts from './pages/listproducts/ListProducts'
import Footer from './components/footer/Footer'
import AdminPage from './pages/admin/Admin'
import { getProducts } from './actions/products'

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const [cart, setCart] = useState([])

    function handleButtonDelete(product) {
        const updateCart = cart.filter((x) => x._id !== product._id)
        setTimeout(setCart(updateCart), 2000)
    }

    function handleButtonPick(newProduct) {
      const existingProduct = cart.find(
        (product) => product._id === newProduct._id
      );
      (existingProduct) ? setCart([...cart]) : setCart([...cart,newProduct])
    }

    useEffect(() => {
        dispatch(getProducts());
    }, [currentId, dispatch]);

    return(
        
        <Router>
                <CssBaseline />         
                <NavBar cart={cart}/>
                    <Switch>
                        <Route exact path='/'>
                            <Home setCurrentId={setCurrentId} onProductPick={handleButtonPick}/>
                        </Route>
                        <Route exact path='/howitworks'>
                            <HowItWorks />
                        </Route>
                        <Route exact path='/listproducts'>
                            <ListProducts setCurrentId={setCurrentId}/>
                        </Route>
                        <Route exact path='/cart'>
                            <Cart cart={cart} onProductDelete={handleButtonDelete}/>
                        </Route>
                        <Route exact path='/contactus'>
                            <ContactUs />
                        </Route>
                        <Route exact path='/album'>
                            <Album />
                        </Route>
                        <Route exact path='/admin'>
                            <AdminPage currentId={currentId} setCurrentId={setCurrentId}/>
                        </Route>
                    </Switch>
                <Footer />
        </Router>
    )
}

export default App;