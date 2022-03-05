import './buttonGo.scss';

const ButtonGo = ({action, link, text, disable=false}) => {

    return (
        <a onClick={action} href={link} className="btn-go" disabled={disable}>{text}</a>
    );
}

export default ButtonGo;