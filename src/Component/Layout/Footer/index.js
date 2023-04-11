import styles from "./footer.module.scss";
import classname from "classnames/bind";

const css = classname.bind(styles);
function Footer() {
  return (
    <>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </>
  );
}

export default Footer;
