/* eslint-disable react/prop-types */
import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

function TabMenu({ tabData, setTabData }) {
  return (
    <div className="w-full md:w-auto">
      <Tabs value={tabData}>
        <TabsHeader
          className="w-full bg-white !bg-opacity-100 md:w-auto"
          indicatorProps={{
            className: "bg-[#232e92] shadow-none !text-black",
          }}
        >
          <Tab
            key="semua"
            value="semua"
            className={`${tabData === "semua" ? "text-white" : "text-black"} w-full transition-transform delay-1000 md:w-auto`}
            onClick={() => setTabData("semua")}
          >
            Semua
          </Tab>
          <Tab
            key="Makanan"
            value="Makanan"
            className={`${tabData === "makanan" ? "text-white" : "text-black"} w-full transition-transform delay-1000 md:w-auto`}
            onClick={() => setTabData("makanan")}
          >
            Makanan
          </Tab>
          <Tab
            key="Makanan"
            value="Minuman"
            className={`${tabData === "minuman" ? "text-white" : "text-black"} w-full transition-transform delay-1000 md:w-auto`}
            onClick={() => setTabData("minuman")}
          >
            Minuman
          </Tab>
        </TabsHeader>
      </Tabs>
    </div>
  );
}

export default TabMenu;
