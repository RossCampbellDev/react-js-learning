import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({children, onClose}: Props) => {
  return (
    <>
    <div className="alert alert-primary alert-dismissible">{children}</div>
    <button type="button" className="btn-close" onClick={onClose}></button>
    </>
  )
}

export default Alert