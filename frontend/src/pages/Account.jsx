import React from "react";

import CrudModule from "@/modules/CrudModule";
import AccountForm from "@/forms/AccountForm";

function Account() {
  const entity = "account";
  const searchConfig = {
    displayLabels: ["username", "player_no", "total_point", "country"],
    searchFields: "username,country",
    outputValue: "_id",
  };

  const panelTitle = "Account Panel";
  const dataTableTitle = "Accounts Lists";
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

  const ADD_NEW_ENTITY = "Add new account";
  const DATATABLE_TITLE = "accounts List";
  const ENTITY_NAME = "account";
  const CREATE_ENTITY = "Create account";
  const UPDATE_ENTITY = "Update account";
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
  return (
    <CrudModule
      createForm={<AccountForm />}
      updateForm={<AccountForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Account;
