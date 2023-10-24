import { DataGrid } from "@mui/x-data-grid";
import { IPost } from "../../intefaces/Post";
import { Box } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import theme from "../../theme";
import { redirect, useNavigate, useNavigation } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { ID_ATOM } from "../../storages/storages";

interface TableProps {
  data: IPost[];
}

export const Table = ({ data }: TableProps) => {
  const [postSelectedId, setPostSelectedId] = useAtom(ID_ATOM);
  const navigation = useNavigate();

  function handleDeletePost(id: number) {
    setPostSelectedId(String(id));
    navigation("/delete-post");
  }

  function handleUpdatePost(id: number) {
    setPostSelectedId(String(id));
    navigation("/update-post");
  }

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
          {
            field: "Acões",
            headerName: "Ações",
            width: 100,
            renderCell: ({ id }) => (
              <Box display="flex" gap={1}>
                <Box>
                  <Edit
                    onClick={(e) => console.log(e.target)}
                    style={{
                      cursor: "pointer",
                      color: theme.colors["main-blue"],
                    }}
                  />
                </Box>
                <Box>
                  <Delete
                    onClick={() => handleDeletePost(Number(id))}
                    style={{
                      cursor: "pointer",
                      color: theme.colors["main-red"],
                    }}
                  />
                </Box>
              </Box>
            ),
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
