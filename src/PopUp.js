import ReactDOM from 'react-dom';

const popUpDivNode = document.querySelector("#pop_up");

function PopUp(){
    const JSX = <div>Heyy</div>;

    return ReactDOM.createPortal(JSX, popUpDivNode);
}

export default PopUp;