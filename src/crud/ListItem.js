import React from "react";

import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Item from "antd/lib/list/Item";

function ListItem({ newList, deleteItem, update }) {
  const popo = () => {
    return <div>asdasdaasdasdasd</div>;
  };

  return (
    <div>
      {newList.map((eachItem) => {
        return (
          <div key={eachItem.key}>
            <h3
              style={{
                position:"center",
                textAlign:"center",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: " #95591E",
                height: "30px",
                width: "300px",
                fontSize: "20px",
                color: "ivory",
              borderRadius: "20px"
              }}
            >
              {eachItem.text}

              {/* <input
                value={eachItem.text}
                id={eachItem.key}
                onChange={(e) => {
                  update(e.target.value, eachItem.text);
                }}
              /> */}

              <div>
                <DeleteOutlined onClick={() => deleteItem(eachItem)} />
              </div>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default ListItem;
