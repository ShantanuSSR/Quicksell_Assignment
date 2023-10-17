import React from "react";
import { useSelector } from "react-redux";
import { BsPlusLg,BsRecord,BsReception0,BsReception1,BsReception3,BsReception4,BsThreeDots,BsExclamationTriangleFill,BsHourglassSplit,BsFillFileTextFill } from "react-icons/bs";
import "../styles/MainBoard.css";
import Card from "./Card";

const MainBoard = () => {
  const { selected_data} = useSelector((state) => state.selectResponse);

  return (
    selected_data && (
      <div className="container">
        {selected_data.map((element, index) => {
          return (
            <>
              <div
                key={index}
                className="dashboard"
              >
                <div className="cardHeading1">
                  <div className="sideView1">
                  {element[index].title==="High"? <BsReception4/>  : element[index].title==="Urgent"? <BsExclamationTriangleFill/> : element[index].title==="Medium"? <BsReception3/> : 
                  element[index].title==="Low"? <BsReception1/> :  element[index].title==="No priority"? <BsReception0/> : element[index].title==="Todo"? <BsRecord/> :element[index].title==="In progress"? 
                  <BsHourglassSplit/> :element[index].title==="Backlog"? <BsFillFileTextFill/> : <div className="image">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU"
                            alt="QuickSell"
                          />
                        </div>}
                  
                    <span>
                      {element[index]?.title} 
                    </span>
                    <span>{element[index]?.value?.length}</span>
                  </div>
                  <div className="sideView2">
                    <BsPlusLg />
                    <span><BsThreeDots/></span>
                  </div>
                </div>
                <div className="elements">
                  {element[index]?.value?.map((element) => {
                    return (
                      <Card
                      key={element.id}
                        id={element.id}
                        title={element.title}
                        tags={element.tag}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default MainBoard;
