import { DataGrid } from "@mui/x-data-grid";
import { IPost } from "../../intefaces/Post";
import { Box } from "@mui/material";
import { Delete, Edit, More } from "@mui/icons-material";
import theme from "../../theme";

import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { SELECTED_POST_DATA, SELECTED_POST_ID } from "../../storages/storages";
import React from "react";
import { API } from "../../services/axios";
import { toast } from "react-toastify";
import { formatDate } from "../../helpers/date";

interface TableProps {
  data: IPost[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Table = (props: TableProps) => {
  const [postSelectedId, setPostSelectedId] = useAtom(SELECTED_POST_ID);
  const [postSelectedData, setPostSelectedData] = useAtom(SELECTED_POST_DATA);
  const navigation = useNavigate();

  async function handleDeletePost(id: number) {
    props.setLoading(true);
    await API.get(`/posts/${id}`).then(({ data }) => {
      if (data.success) {
        setPostSelectedData(data.data);
        navigation("/delete-post");
      } else {
        toast.error("Post não encontrado!");
      }
      props.setLoading(true);
    });
  }

  async function handleUpdatePost(id: number) {
    props.setLoading(true);
    await API.get(`/posts/${id}`).then(({ data }) => {
      if (data.success) {
        setPostSelectedData(data.data);
        navigation("/update-post");
      } else {
        toast.error("Post não encontrado!");
      }
      props.setLoading(false);
    });
  }

  function handlePostDetails(id: number) {
    setPostSelectedId(String(id));
    navigation("/post-details");
  }

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={props.data}
        localeText={{
          MuiTablePagination: {
            labelRowsPerPage: "Conteúdo por página",
            labelDisplayedRows: ({ page }) => `Página ${++page}`,
          },
        }}
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
            valueGetter: ({ value }) => formatDate(value),
            width: 200,
          },
          {
            field: "created_at",
            headerName: "Criado em",
            valueGetter: ({ value }) => formatDate(value),
            width: 200,
          },
          {
            field: "updated_at",
            headerName: "Atualizado Em",
            valueGetter: ({ value }) => formatDate(value),
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
                    onClick={() => handleUpdatePost(Number(id))}
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
                <Box>
                  <More
                    onClick={() => handlePostDetails(Number(id))}
                    style={{
                      cursor: "pointer",
                      color: theme.colors["dark-gray-300"],
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
