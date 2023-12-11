import logo from "../assets/logo.jpg"
import Button from "./Button";

export default function Header(){
    return (
        <header id="main-header">
            <div id="title">
                <img src ={logo} alt="Food" />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly>Cart (0)</Button>
            </nav>
        </header>

    );
}