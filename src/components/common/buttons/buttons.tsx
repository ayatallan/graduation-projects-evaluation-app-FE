import Button from 'react-bootstrap/Button';
import './button.css';
interface Props {
  text: any;
  text2?: any,
}
const Buttons = (props: Props) => {
  return (

    <div className="d-grid gap-2 main-btns mx-auto main-btns">
      <Button variant="secondary" size="lg" className='btn'>{props.text} &nbsp; 
        <small className='type'>{props.text2}</small></Button>

    </div>

  );
};

export default Buttons;
