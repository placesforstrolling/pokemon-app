import './buttonGo.scss';

const ButtonGo = ({action, link, text}) => {

    return (
        <a onClick={action} href={link} className="btn-go">{text}</a>
    );
}

export default ButtonGo;