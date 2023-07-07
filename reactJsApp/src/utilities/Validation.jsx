const isValidTextInput = (str) => str.match(/^[A-Za-z\s]+$/);
const isValidAddress = (address) => address.match(/^[A-Za-z0-9\s]+$/);

const getClientAlreadyExists = (clients, currentClient) => {
  const { name, surname, email } = currentClient;
  return clients.some(
    (client) =>
      client.name === name &&
      client.surname === surname &&
      client.email === email
  );
};
export const tryGetErrorMessage = (clients, currentClient) => {
  const clientAlreadyExists = getClientAlreadyExists(clients, currentClient);
  const { name, surname, address } = currentClient;

  switch (true) {
    case clientAlreadyExists:
      return "Client already exists!";

    case !isValidTextInput(name):
    case !isValidTextInput(surname):
      return "Name and surname can contain only letters!";

    case address && !isValidAddress(address):
      return "Address can't contain special chars!";

    default:
      return;
  }
};
//vraca undefined ako nema return keyword
