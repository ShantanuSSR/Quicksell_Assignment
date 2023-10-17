import axios from "axios";

export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: "dataRequest" });

    const { data } = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );

    dispatch({ type: "dataSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "dataFailure" });
  }
};

export const dataSelect = (group, tickets, order) => async (dispatch) => {
  try {
    dispatch({ type: "dataSelectRequest" });

    let user = false;
    let arr = [],
    selected_data = [];

    if (order === "title") {
      selected_data.forEach((element, index) => {
        element[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
      });
    }

    if (group === "status") {
      const uniqueStatusCategories = Array.from(new Set(tickets.map(ticket => ticket.status)));
    
      uniqueStatusCategories.forEach((status, index) => {
        const ticketsByStatus = tickets.filter((ticket) => ticket.status === status);
        selected_data.push({
          [index]: {
            title: status,
            value: ticketsByStatus,
          },
        });
      });
    }
    
     else if (group === "user") {
      user = true;
      tickets?.users?.forEach((element, index) => {
        arr = tickets?.tickets?.filter((filterElement) => {
          return element.id === filterElement.userId;
        });

        selected_data.push({
          [index]: {
            title: element.name,
            value: arr,
          },
        });
      });
    } 
    else {
      let priorityList = ["No priority",  "Urgent", "High", "Medium", "Low"];

      priorityList.forEach((element, index) => {
        arr = tickets.filter((filterElement) => {
          return index === filterElement.priority;
        });

        selected_data.push({
          [index]: {
            title: element,
            value: arr,
          },
        });
      });
    }
    
    if (order === "priority") {
      selected_data.forEach((element, index) => {
        element[index]?.value?.sort((a, b) => b.priority - a.priority);
      });
    }

    dispatch({ type: "dataSelectSuccess", payload: { selected_data, user} });
  } catch (error) {
    dispatch({ type: "dataSelectFailure", payload: error.message });
  }
};
