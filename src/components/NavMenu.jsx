import React, { useEffect, useState } from "react";
import "../styles/NavMenu.css";
import { BsSliders2, BsChevronDown } from "react-icons/bs"; 
import { useDispatch, useSelector } from "react-redux";
import { dataSelect } from "../redux/actions";


const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

const Navbar = () => {
  const [slider, setSlider] = useState(false);
  const dispatch = useDispatch();
  const { tickets, users } = useSelector((state) => state.response);
  const [groups, setGroups] = useState(getGroup());
  const [order, setOrder] = useState(getOrder());

  const handleGroups = (e, value) => {
    if (value) {
      setGroups(e.target.value);
      setSlider(!setSlider);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrder(e.target.value);
      setSlider(!setSlider);
      localStorage.setItem("order", e.target.value);
    }
  };

  useEffect(() => {
    if (groups === "user") {
      dispatch(
        dataSelect(
          groups,
          {
            tickets,
            users,
          },
          order
        )
      );
    } else {
      dispatch(dataSelect(groups, tickets, order));
    }
  }, [tickets, dispatch, groups, users, order]);

  return (
    <div className="navmenu">
      <div className="navmenuButton">
        <button className="groupButton" onClick={() => setSlider(!slider)}>
          <BsSliders2 className="icon"/> <p className="content">Display</p>  <BsChevronDown className="icon2" />
        </button>

        {slider && (
          <>
            <div className="dropDown">
              <div className="group">
                <span style={{ color: "silver"}}>Grouping</span>
                <select
                  value={groups}
                  onChange={(e) => handleGroups(e, true)}
                  name="group"
                  id="group"
                >
                  <option style={{fontWeight: "bold"}} value="status">Status</option>
                  <option style={{fontWeight: "bold"}} value="user">User</option>
                  <option style={{fontWeight: "bold"}} value="priority">Priority</option>
                </select>
              </div>

              <div className="group">
                <span style={{ color: "silver" }}>Ordering</span>
                <select
                  value={order}
                  onChange={(e) => handleGroups(e, false)}
                  name="order"
                  id="order"
                >
                  <option style={{fontWeight: "bold"}} value="priority">Priority</option>
                  <option style={{fontWeight: "bold"}} value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
