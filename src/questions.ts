export const questions = (): any => {
  return {
    start: [
      {
        type: "select",
        name: "action",
        message: "What do you want to do?",
        choices: [
          {title: "Set a new Password", value: "set"},
          {title: "Get a Password", value: "get"},
          {title: "Edit a Pasword", value: "edit"},
          {title: "Delete an Entry", value: "delete"},
          {title: "EXIT", value: "exit"},
        ],
      },
    ],
    set: [
      {
        type: "text",
        name: "name",
        message: "The Name of the Service ",
      },
      {
        type: "password",
        name: "pswd1",
        message: "The Password of this Service?",
      },
      {
        type: "password",
        name: "pswd2",
        message: "The Password of this Service again?",
      },
    ],
    edit: [
      {
        type: "text",
        name: "serviceName",
        message: "The name of the Service? ",
      },
    ],
    delete: [
      {
        type: "text",
        name: "serviceName",
        message: "The name of the Service? ",
      },
    ],
  };
};
