const {listContacts, 
      getContactById, 
      removeContact, 
      addContact
} = require('./contacts');
const argv = require('yargs').argv;

function invokeAction({ action, name, email, phone, id }) {
    switch (action) {
      case 'list':
        listContacts();
        break;
  
      case 'get':
        getContactById(id);
        break;
  
      case 'add':
        addContact(name, email, phone, id);
        break;
  
      case 'remove':
        removeContact(id);
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  
  invokeAction(argv);
