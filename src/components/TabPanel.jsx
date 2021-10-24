import React from "react";
import { Tabs } from "antd";
import OurProcessCard from "./OurProcessCard";
const { TabPane } = Tabs;
function TabPanel({ tabData }) {
  return (
    <div>
      <Tabs tabPosition={"left"}>
        {tabData.map((item, index) => {
          return (
            <TabPane tab={`${index +1}. ${item.title}`} key={index}>
              <OurProcessCard
                title={item.title}
                content={item.content}
                imgSrc={item.imgSrc}
              />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default TabPanel;
