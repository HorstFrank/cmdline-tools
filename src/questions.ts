export const questions = () => {
  return {
    init: [
      {
        type: "text",
        name: "masterPswd",
        message: "Your Masterpswd? ",
      },
      {
        type: "multiselect",
        name: "action",
        message: "What do you want to do?",
        choices: [
          {title: "Set a new Password", value: "set"},
          {title: "Get a Password", value: "get"},
          {title: "Edit a Pasword", value: "edit"},
          {title: "Delete an Entry", value: "delete"},
        ],
      },
    ],
    set: [
      {
        type: "text",
        name: "serviceName",
        message: "The name of the Service? ",
      },
      {
        type: "password",
        name: "serviceName",
        message: "The name of the Service? ",
      },
    ],
    get: [
      {
        type: "text",
        name: "serviceName",
        message: "The name of the Service? ",
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
