import Pagination from "../../../component/material-tailwind/Pagination";
import Table from "../../../component/material-tailwind/Table";

function KelolaDataPS() {
  return (
    <>
      <div className="mb-2">
        <h1 className="text-4xl font-semibold text-[#232e92]">
          Kelola Data PlayStation
        </h1>
      </div>

      <Table columns="grid-cols-[2fr,2fr,2fr,2fr,3.2rem]">
        <Table.Header>
          <div>Nama Karyawan</div>
          <div>Email</div>
          <div>No Telp</div>
          <div>Alamat</div>
          <div></div>
        </Table.Header>
        {/* <Table.Body
          data={data}
          isLoading={isLoading}
          render={(item) => (
            <KaryawanRow
              key={item.name}
              item={item}
              handleEdit={handleEdit}
              handleDelete={openDeleteModal}
            />
          )}
        /> */}
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

export default KelolaDataPS;
