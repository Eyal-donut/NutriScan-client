import Modal from "../../components/global components/Modal/Modal";
import classes from './Menu.module.css'

const Menu = ({ isMenuDisplay }) => {
  return (
    <Modal className={isMenuDisplay ? classes.display : classes.hide}>
      <h1>Menu</h1>
    </Modal>
  );
};
export default Menu;
