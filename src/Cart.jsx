import { useReducer } from 'react'
import './Cart.css'
import Apple from './assets/apple.jpg'
import Banana from './assets/banana.jpg'
import Grapes from './assets/grapes.jpg'
import Mango from './assets/mango.jpg'
import Orange from './assets/tangerines.jpg'

const intial = {appleCount: 0, bananaCount: 0, grapesCount: 0, orangeCount: 0, mangoCount: 0};

const Reducer = (state, action) => {

    switch (action.type) {
        case "appleAdd":
            return {appleCount: state.appleCount+1, bananaCount: state.bananaCount, grapesCount: state.grapesCount, orangeCount: state.grapesCount, mangoCount: state.mangoCount};
        case "bananaAdd":
            return {appleCount: state.appleCount, bananaCount: state.bananaCount+1, grapesCount: state.grapesCount, orangeCount: state.grapesCount, mangoCount: state.mangoCount};
        case "grapesAdd":
            return {appleCount: state.appleCount, bananaCount: state.bananaCount, grapesCount: state.grapesCount+1, orangeCount: state.orangeCount, mangoCount: state.mangoCount};
        case "orangeAdd":
            return {appleCount: state.appleCount, bananaCount: state.bananaCount, grapesCount: state.grapesCount, orangeCount: state.grapesCount+1, mangoCount: state.mangoCount};
        case "mangoAdd":
            return {appleCount: state.appleCount, bananaCount: state.bananaCount, grapesCount: state.grapesCount, orangeCount: state.orangeCount, mangoCount: state.mangoCount+1};
        case "appleRemove":
            return {appleCount: state.appleCount-1, bananaCount: state.bananaCount, grapesCount: state.grapesCount, orangeCount: state.orangeCount, mangoCount: state.mangoCount};
        case "bananaRemove":
            return {appleCount: state.appleCount, bananaCount: state.bananaCount-1, grapesCount: state.grapesCount, orangeCount: state.orangeCount, mangoCount: state.mangoCount};;
        case "grapesRemove":
            return {appleCount: state.appleCount, bananaCount: state.bananaCount, grapesCount: state.grapesCount-1, orangeCount: state.orangeCount, mangoCount: state.mangoCount};;
        case "orangeRemove":
            return {appleCount: state.appleCount, bananaCount: state.bananaCount, grapesCount: state.grapesCount, mangoCount: state.mangoCount, orangeCount: state.orangeCount-1};
        case "mangoRemove":
            return {appleCount: state.appleCount, bananaCount: state.bananaCount, grapesCount: state.grapesCount, orangeCount: state.orangeCount, mangoCount: state.mangoCount-1};
        case "reset":
            return {appleCount: 0, bananaCount: 0, grapesCount: 0, orangeCount: 0, mangoCount: 0};

    }

}

const Cart = () => {

    const [state, dispatch] = useReducer(Reducer, intial);

    const items = [
        {title: "Apple",img: Apple},
        {title: "Banana",img: Banana},
        {title: "Grapes",img: Grapes},
        {title: "Orange",img: Orange},
        {title: "Mango",img: Mango},
    ];

    return (
        <>
            <section className="wrapper">
                <div className='card'>
                    <div className="card-img">
                        <img src={items[0].img} alt={items[0].title+" image"} className="img"/>
                    </div>
                    <div className="card-title">
                        <h2>{items[0].title}</h2>
                    </div>
                    <div className="card-action">
                        <button className='btn add-btn' onClick={() => dispatch({type: "appleAdd"})}>Add</button>
                        <button className='btn remove-btn' onClick={() => dispatch({type: "appleRemove"})}>Remove</button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-img">
                        <img src={items[1].img} alt={items[1].title+" image"} className="img"/>
                    </div>
                    <div className="card-title">
                        <h2>{items[1].title}</h2>
                    </div>
                    <div className="card-action">
                        <button className='btn add-btn' onClick={() => dispatch({type: "bananaAdd"})}>Add</button>
                        <button className='btn remove-btn' onClick={() => dispatch({type: "bananaRemove"})}>Remove</button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-img">
                        <img src={items[2].img} alt={items[2].title+" image"} className="img"/>
                    </div>
                    <div className="card-title">
                        <h2>{items[2].title}</h2>
                    </div>
                    <div className="card-action">
                        <button className='btn add-btn' onClick={() => dispatch({type: "grapesAdd"})}>Add</button>
                        <button className='btn remove-btn' onClick={() => dispatch({type: "grapesRemove"})}>Remove</button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-img">
                        <img src={items[3].img} alt={items[3].title+" image"} className="img"/>
                    </div>
                    <div className="card-title">
                        <h2>{items[3].title}</h2>
                    </div>
                    <div className="card-action">
                        <button className='btn add-btn' onClick={() => dispatch({type: "orangeAdd"})}>Add</button>
                        <button className='btn remove-btn' onClick={() => dispatch({type: "orageRemove"})}>Remove</button>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-img">
                        <img src={items[4].img} alt={items[4].title+" image"} className="img"/>
                    </div>
                    <div className="card-title">
                        <h2>{items[4].title}</h2>
                    </div>
                    <div className="card-action">
                        <button className='btn add-btn' onClick={() => dispatch({type: "mangoAdd"})}>Add</button>
                        <button className='btn remove-btn' onClick={() => dispatch({type: "mangoRemove"})}>Remove</button>
                    </div>
                </div>
            </section>
            <h1 className='title'>Cart List</h1>
            <section className="cart-items-wrapper">
                <div className="qty-card">
                    <h2>{items[0].title}</h2>
                    <h3>Qty: {state.appleCount}</h3>
                </div>
                <div className="qty-card">
                    <h2>{items[1].title}</h2>
                    <h3>Qty: {state.bananaCount}</h3>
                </div>
                <div className="qty-card">
                    <h2>{items[2].title}</h2>
                    <h3>Qty: {state.grapesCount}</h3>
                </div>
                <div className="qty-card">
                    <h2>{items[3].title}</h2>
                    <h3>Qty: {state.orangeCount}</h3>
                </div>
                <div className="qty-card">
                    <h2>{items[4].title}</h2>
                    <h3>Qty: {state.mangoCount}</h3>
                </div>
            </section>
        </>
    )
}

export default Cart;