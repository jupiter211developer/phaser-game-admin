import React, { useEffect } from "react";

import CrudModule from "@/modules/CrudModule";
import TeamForm from "@/forms/TeamForm";
import { useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";

function Team() {
  const entity = "team";
  const searchConfig = {
    displayLabels: ["username", "player_no", "total_point", "country"],
    searchFields: "username,country",
    outputValue: "_id",
  };

  const panelTitle = "Team Panel";
  const dataTableTitle = "Team Lists";
  const entityDisplayLabels = ["company"];

  const readColumns = [
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Player No",
      dataIndex: "player_no",
    },
    {
      title: "Total Point",
      dataIndex: "total_point",
    },
    {
      title: "Current Point",
      dataIndex: "cur_point",
    },
    {
      title: "Country",
      dataIndex: "country",
    }
  ];
  const dataTableColumns = [
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Player No",
      dataIndex: "player_no",
    },
    {
      title: "Total Point",
      dataIndex: "total_point",
    },
    {
      title: "Current Point",
      dataIndex: "cur_point",
    },
    {
      title: "Country",
      dataIndex: "country",
    }
  ];

  const ADD_NEW_ENTITY = "Add new team";
  const DATATABLE_TITLE = "team List";
  const ENTITY_NAME = "team";
  const CREATE_ENTITY = "Create team";
  const UPDATE_ENTITY = "Update team";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(crud.list('team_logos'))
  }, [])

  return (
    <CrudModule
      createForm={<TeamForm />}
      updateForm={<TeamForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Team;
