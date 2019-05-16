import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TrelloList = ({list}) => {
    return(
        <div>
        <h1>Frello</h1>
            <div className="card-item-wrapper">
            <div> 
            </div>
            <div className="head-items">
                <div>Phone Features</div>
                <div>... </div>
            </div>
            <div>
                    <Cards cardList={cards}/>
            </div> 
            <div className='tail-items'>Add more cards ...</div>
            </div>
        </div>
    )
}

function Cards({cardList}) {
    return(
        <React.Fragment>
            {cardList.map(card => (
                <CardItem key = {card.id} message={card.message}/>
                         ))}
        </React.Fragment>
     )
}

const CardItem = ({message}) => (
    <div className="list-items">
    <div className="list-data">{message}</div>
    </div>
)

const cards = [

    {id:0,
        message:"Stereo Speakers"},
    {id:1,
        message:"Snapdragon 855"},
    {id:2,
        message:"Pop-up Camera"},
    {id:3,
        message:"48MP Camera"},
    {id:4,
        message:"Latest Android Q"},
    {id:5,
        message:"IP68 Water Resistant"},
    {id:6,
        message:"Corning Gorilla Glass"}
]

ReactDOM.render(<TrelloList list={cards}/>,document.querySelector('#root'))