const fs = require('fs');
const path = require('path');


const contactsPath = path.join('db', 'contacts.json');


function listContacts() {
    fs.readFile(contactsPath, {encoding: 'utf-8'}, (err, data) =>{
        try {
            const parsedData = JSON.parse(data);
            console.table(parsedData);
        }
        catch (error){
            console.log('listContacts error:', err);
        }
    });
  }
  
  function getContactById(contactId) {
    fs.readFile(contactsPath, {encoding: 'utf-8'}, (err, data) =>{
        try {
            const parsedData = JSON.parse(data);
            const findContactsById = parsedData.find(item => item.id === contactId);
            console.log('Contact by id:', findContactsById)
        }
        catch(error) {
            console.log('getContactById error:', err);
        }        
     });
  }
  
  function removeContact(contactId) {
    fs.readFile(contactsPath, { encoding: 'utf-8' }, (err, data) => {
      try {
        const parsedData = JSON.parse(data);
        const removeContactById = parsedData.filter(item => item.id !== contactId);
  
        console.table(removeContactById);
        fs.writeFile(contactsPath, JSON.stringify(removeContactById), () => {
          console.log('Contact was removed');
        });
        return removeContactById;
      } catch (error) {
        console.log('remuveContact error:', err);
      }
    });
  }
  
  function addContact(name, email, phone, id) {
        fs.readFile(contactsPath, {encoding: 'utf-8'},(err, data) => {
            try {
                const parsedData = JSON.parse(data);
                const newContact = {name, id, email, phone};
                parsedData.push(newContact);
                fs.writeFile(contactsPath, JSON.stringify(parsedData), () => {
                    console.log('New contact added');
                });
            }
            catch(error) {
                console.log('Added error:', err);
            }
        });
  }

  module.exports = {listContacts, getContactById, removeContact, addContact};