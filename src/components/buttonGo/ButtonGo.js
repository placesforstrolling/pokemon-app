import './buttonGo.scss';

const ButtonGo = (props) => {

    return (
        <a href={props.link} className="btn-go">{props.text}</a>
    );
}

export default ButtonGo;