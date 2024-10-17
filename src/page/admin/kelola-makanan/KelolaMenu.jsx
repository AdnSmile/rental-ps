// import { useNavigate } from "react-router-dom";
import Pagination from "../../../component/material-tailwind/Pagination";
import Table from "../../../component/material-tailwind/Table";
import { apiAuth } from "../../../utils/ApiService";
import { useEffect, useState } from "react";
import KelolaMenuRow from "./KelolaMenuRow";
import { Button, Input } from "@material-tailwind/react";
import { HiPlus } from "react-icons/hi2";
import TabMenu from "./TabMenu";

function KelolaMenu() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [tabData, setTabData] = useState("semua");
  const [search, setSearch] = useState("");
  const fetchData = () => {
    setLoading(true);
    apiAuth
      .get("menu/all", {
        params: {
          size: 10,
          menu_type: "Makanan",
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [tabData]);

  return (
    <>
      <div className="mb-4 flex flex-col justify-between md:flex-row">
        <h1 className="mb-4 text-center text-4xl font-semibold text-[#232e92] md:mb-0 md:text-left">
          Kelola Makanan & Minuman
        </h1>
        <Button className="flex items-center justify-center gap-2 bg-[#232e92]">
          <HiPlus size={16} />
          Add Menu
        </Button>
      </div>
      <div className="mb-4 flex flex-col items-end justify-between md:flex-row">
        <div className="mb-2 md:mb-0">
          <p className="font-semibold text-[#232e92]">Cari Menu</p>
          <div className="w-72">
            <Input
              type="text"
              size="lg"
              placeholder="Cari Nama Menu"
              className="f !border !border-gray-300 bg-white text-gray-900 ring-0 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:ring-black"
              labelProps={{
                className: "hidden",
              }}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
        </div>
        <TabMenu tabData={tabData} setTabData={setTabData} />
      </div>
      <Table columns="grid-cols-[1fr,2fr,2fr,2fr,2fr,3.2rem]">
        <Table.Header>
          <div>image</div>
          <div>Menu Name</div>
          <div>Menu Type</div>
          <div>Price</div>
          <div>Stock</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={data}
          isLoading={loading}
          render={(item) => (
            <KelolaMenuRow
              key={item.name}
              item={item}
              // handleEdit={handleEdit}
              // handleDelete={openDeleteModal}
            />
          )}
        />
        <Table.Footer>
          <Pagination
            //   count={totalData}
            count={10}
          />
        </Table.Footer>
      </Table>
    </>
  );
}

export default KelolaMenu;
