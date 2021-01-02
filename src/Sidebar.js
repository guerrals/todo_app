import React from "react";
import "./Sidebar.css";
import pic from "./assets/Captura de tela de 2020-11-28 18-32-23.png";
import { BsListTask } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi";
import { SiCircle } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="menu">
      <img src={pic} width="257.033" alt="" />
      <ul className="menu-items">
        <div className="item">
          <BsListTask size="1.7em" color="#3987cd" />
          <li className="text-selected">Lista de compras</li>
        </div>
        <div className="item">
          <HiOutlineClock size="1.7em" color="#909090" />
          <li className="text">Histórico</li>
        </div>
        <div className="item">
          <SiCircle size="1.7em" color="#909090" />
          <li className="text">Configurações</li>
        </div>
        <div className="item">
          <FiLogOut size="1.7em" color="#909090" />
          <span className="text">Sair</span>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;

/**
 * span {
  margin-left: 16px;
}


.text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
}

.menu {
  background-color: white;
  justify-content: center;
  width: 250px;
  height: 100vh;
  display: flex;
  position: fixed;
  left: 0;
  box-shadow: 0px 1px 1px 0.5px grey;
}

.text a {
  text-decoration: none;
  color: #3987cd;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
}

.text a:hover {
  background-color: #eeeeee;
}


 */
