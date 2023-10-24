import { DataGrid } from "@mui/x-data-grid";
import { Post } from "../../intefaces/Post";

interface TableProps {
  data: Post[];
}

export const Table = ({ data }: TableProps) => {
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={data}
        columns={[
          {
            field: "title",
            headerName: "Título",
            width: 200,
          },
          {
            field: "slug",
            headerName: "Slug",
            width: 200,
          },
          {
            field: "published_at",
            headerName: "Publicado em",
            width: 200,
          },
          {
            field: "created_at",
            headerName: "Criado em",
            width: 200,
          },
          {
            field: "updated_at",
            headerName: "Atualizado Em",
            width: 200,
          },
        ]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};
