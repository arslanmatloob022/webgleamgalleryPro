<template>
  <div class="main">
    <div class="container">
      <h2>Contacts</h2>
      <div class="search-filter">
        <input
          id="inputsearch"
          type="text"
          v-model="searchTerm"
          placeholder="Search..."
        />
        <select id="input-name" v-model="selectedCategory">
          <option value="all">All</option>
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="colleagues">Colleagues</option>
        </select>
      </div>
      <ul id="contact-list">
        <li
          v-for="contact in filteredContacts"
          :key="contact.id"
          class="contact"
        >
          <div>
            <strong>{{ contact.name }}</strong
            ><br />
            <span>Email: {{ contact.email }}</span>
          </div>
          <div class="contact-actions">
            <button class="btn" @click="editContact(contact)">Edit</button>
            <button class="btn" @click="deleteContact(contact.id)">
              Delete
            </button>
          </div>
        </li>
      </ul>
      <div class="modal" v-if="isEditing">
        <div class="modal-content">
          <h2>Edit Contact</h2>
          <form @submit.prevent="updateContact">
            <div class="form-group">
              <label for="editName">Name</label>
              <input
                type="text"
                id="editName"
                v-model="editedContact.name"
                required
              />
            </div>
            <div class="form-group">
              <label for="editEmail">Email</label>
              <input
                type="email"
                id="editEmail"
                v-model="editedContact.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="editCategory">Category</label>
              <select
                id="editCategory"
                v-model="editedContact.category"
                required
              >
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="colleagues">Colleagues</option>
              </select>
            </div>
            <button class="btn" type="submit">Save Changes</button>
            <button class="btn" @click="cancelEdit">Cancel</button>
          </form>
        </div>
      </div>
    </div>
    <!-- col-lg-6 col-md-6 col-sm-12 col-12 -->
    <div class="code-container">
      <h2>Component Code</h2>
      <textarea name="code" id="codeText" cols="30" rows="10">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1rem;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }

        h2 {
            font-size: 24px;
        }

        #contact-list {
            margin-top: 20px;
        }

        .contact {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }

        .contact:last-child {
            border-bottom: none;
        }

        .contact-actions {
            display: flex;
            gap: 10px;
        }

        .btn {
            padding: 5px 10px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type="text"] {
            width: 100%;
            padding: 5px;
        }

        select {
            padding: 5px;
        }

        .search-filter {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Contact List</h1>
    </header>
    <div class="container">
        <h2>Contacts</h2>
        <div class="search-filter">
            <input type="text" id="search" placeholder="Search...">
            <select id="filter">
                <option value="all">All</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="colleagues">Colleagues</option>
            </select>
        </div>
        <ul id="contacts-list">
            <!-- Contacts will be dynamically added here -->
        </ul>
    </div>

    <script>
        const contacts = [
            { id: 1, name: 'John Doe', email: 'john@example.com', category: 'family' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', category: 'friends' },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com', category: 'colleagues' },
            // Add more contacts as needed
        ];

        const searchInput = document.getElementById('search');
        const filterSelect = document.getElementById('filter');
        const contactList = document.getElementById('contact-list');

        function renderContacts() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = filterSelect.value;

            const filteredContacts = contacts.filter(contact => {
                if (selectedCategory === 'all' || contact.category === selectedCategory) {
                    return contact.name.toLowerCase().includes(searchTerm);
                }
                return false;
            });

            contactList.innerHTML = '';

            filteredContacts.forEach(contact => {
                const listItem = document.createElement('li');
                listItem.classList.add('contact');
                listItem.innerHTML = `
                    <div>
                        <strong>${contact.name}</strong><br>
                        <span>Email: ${contact.email}</span>
                    </div>
                    <div class="contact-actions">
                        <button class="btn">Edit</button>
                        <button class="btn">Delete</button>
                    </div>
                `;
                contactList.appendChild(listItem);
            });
        }

        // Event listeners
        searchInput.addEventListener('input', renderContacts);
        filterSelect.addEventListener('change', renderContacts);

        // Initial render
        renderContacts();
    </script>
</body>
</html>


      </textarea>
      <button id="copycode" @click="copyCode">Copy</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          category: "friends",
        },
        {
          id: 3,
          name: "Bob Johnson",
          email: "bob@example.com",
          category: "colleagues",
        },
        {
          id: 4,
          name: "Ed Shareen",
          email: "edshareen@example.com",
          category: "family",
        },
        {
          id: 5,
          name: "Alfa Tred",
          email: "alfatred@example.com",
          category: "friends",
        },
        // Add more contacts as needed
      ],
      searchTerm: "",
      selectedCategory: "all",
      isEditing: false,
      editedContact: { id: null, name: "", email: "", category: "" },
    };
  },
  computed: {
    filteredContacts() {
      const searchTerm = this.searchTerm.toLowerCase();
      const selectedCategory = this.selectedCategory;

      return this.contacts.filter((contact) => {
        if (
          selectedCategory === "all" ||
          contact.category === selectedCategory
        ) {
          return contact.name.toLowerCase().includes(searchTerm);
        }
        return false;
      });
    },
  },
  methods: {
    editContact(contact) {
      console.log("preser");
      this.isEditing = true;
      this.editedContact = { ...contact };
    },
    updateContact() {
      // Update the contact in the contacts array
      const index = this.contacts.findIndex(
        (contact) => contact.id === this.editedContact.id
      );
      if (index !== -1) {
        this.contacts[index] = { ...this.editedContact };
      }
      this.cancelEdit();
    },
    cancelEdit() {
      this.isEditing = false;
      this.editedContact = { id: null, name: "", email: "", category: "" };
    },
    deleteContact(contactId) {
      // Delete the contact from the contacts array
      const index = this.contacts.findIndex(
        (contact) => contact.id === contactId
      );
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    },
    copyCode() {
      const codeText = document.getElementById("codeText");
      codeText.select();
      document.execCommand("copy");
    },
  },
};
</script>

<style scoped>
.main {
  margin: 0;
  display: flex;
  width: 100%;
  gap: 10px;
  box-shadow: 0px 0px 10px #333;
}
.container {
  width: 50%;
  z-index: 0;
  margin: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 10px;
}
.code-container {
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  padding: 10px;
  width: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  background-color: #ffffff;
}
h2 {
  font-size: 24px;
  margin: 10px;
}
textarea {
  font-family: monospace;
  padding: 10px;
  border-radius: 6px;
  width: 95%;
}
#copycode {
  margin: 10px;
  padding: 6px 4px;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  box-shadow: 0px 0px 3px #afafaf;
}
#copycode:hover {
  transform: scale(1.07);
  box-shadow: 0px 0px 5px #afafaf;
}

#contact-list {
  margin-top: 20px;
}

.contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.contact:last-child {
  border-bottom: none;
}

.contact-actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 5px 10px;
  background-color: rgb(233, 86, 33);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type="text"] {
  width: 100%;
  padding: 5px;
}

select {
  padding: 5px;
}

.search-filter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.modal {
  background-color: #443f3fd8;
  border-radius: 6px;
  position: absolute;
  z-index: 1000;
  padding: 20px;
  width: 60%;
  top: 10%;
  left: 20%;
  color: white;
}
.modal input {
  margin: 14px;
  width: 60%;
  padding: 5px;
  border-radius: 6px;
}

.modal select {
  border-radius: 6px;
  width: 57%;
  margin: 14px;
  padding: 5px;
}
.modal .btn {
  padding: 6px 8px;
  margin: 0px 10px;
}
* {
  margin: 0;
}
@media screen and (max-width: 760px) {
  .main {
    display: flex;
    flex-wrap: wrap;
  }
  .container {
    width: 100%;
  }
  .code-container {
    width: 100%;
  }
}
@media screen and (max-width: 670px) {
  h2 {
    font-size: 16px;
    margin: 0;
  }

  #copycode {
    margin: 10px;
    padding: 6px 4px;
  }

  .contact-actions {
    display: flex;
    gap: 10px;
  }

  .btn {
    padding: 4px 8px;
    font-size: 10px;
  }

  input[type="text"] {
    width: 90%;
    padding: 5px;
  }

  .search-filter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .modal {
    padding: 10px;
    width: 100%;
  }
  .modal input {
    padding: 5px;
  }

  .modal select {
    width: 57%;
  }
  .modal .btn {
    padding: 4px 6px;
  }
}
</style>
