import './buttonGo.scss';

const ButtonGo = ({action, link, text, disable=false}) => {

    return (
        <a onClick={!disable ? action : null} href={link} className="btn-go">{text}</a>
    );
}

export default ButtonGo;