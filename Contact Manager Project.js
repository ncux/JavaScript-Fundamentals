j
class Contact {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

var c1 = new Contact("Talent Malaba", "malabatalent@gmail.com");
var c2 = new Contact("Musa Malaba", "mmalaba66@gmail.com");
var c3 = new Contact("Victor Malaba", "malabavictor@gmail.com");


// when we build the contact manager, it
// has an empty list of contacts:

class ContactManager {
    constructor() {
        this.listOfContacts = [];
    }

    add(contact) {
        this.listOfContacts.push(contact);
    }

    // we iterate on the list of contacts until we find the contact
    // passed as a parameter (we say that they are equal if emails match):

    remove(contact) {
        for(let i = 0; i < this.listOfContacts.length; i++) {
            var c = this.listOfContacts[i];

            if(c.email === contact.email) {
                this.listOfContacts.splice(i, i);        // remove the contact at index i
                break;                                   // exit the loop
            }
        }
    }

    printContactsToConsole() {
        this.listOfContacts.forEach(function(c) {
            console.log(c.name);
        });
    }

    save() {
        var localStorage.contacts = JSON.stringify(this.listOfContacts);
    }

    load() {
        if(localStorage.contacts !== undefined) {
            this.listOfContacts = JSON.parse(localStorage.contacts);
        }
    }

// Using the Contact Manager:

var cm = new ContactManager();
cm.add(c1);
cm.add(c2);
cm.add(c3);
cm.printContactsToConsole();
