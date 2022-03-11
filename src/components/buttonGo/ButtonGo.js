import './buttonGo.scss';

const ButtonGo = ({action, link, text, disable}) => {

    return (
        <a onClick={disable ? null : action} href={link} className="btn-go">{text}</a>
    );
}

export default ButtonGo;