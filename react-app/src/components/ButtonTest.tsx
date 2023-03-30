interface Props {
    btnText: string;
    color?: 'primary' | 'secondary' | 'success';
    onClick: () => void;
}

const ButtonTest = ({btnText, onClick, color = 'success'}: Props) => {
  return (
    <button 
        type="button" 
        className={`btn btn-${color}`}
        onClick={onClick}
    >{btnText}</button>
  )
}

export default ButtonTest