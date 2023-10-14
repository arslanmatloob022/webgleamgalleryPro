<template>
  <section class="main">
    <div class="container">
      <div class="lead-list">
        <h2>Lead List</h2>

        <!-- Search and Filter Options -->
        <div class="search-filter">
          <input v-model="searchQuery" placeholder="Search by name..." />
          <select v-model="filterStatus">
            <option value="">All</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
          </select>
        </div>

        <!-- Lead List -->
        <div class="lead-item" v-for="lead in filteredLeads" :key="lead.id">
          <div class="lead-info">
            <p class="lead-name">{{ lead.name }}</p>
            <p class="lead-email">{{ lead.email }}</p>
            <p class="lead-status">{{ lead.status }}</p>
          </div>
          <div class="lead-actions">
            <button
              class="action-btn"
              @click="convertToOpportunity(lead)"
              v-if="lead.status === 'new'"
            >
              Convert
            </button>
            <button class="action-btn" @click="editLead(lead)">Edit</button>
            <button class="action-btn" @click="deleteLead(lead)">Delete</button>
          </div>
        </div>

        <!-- Edit Lead Modal -->
        <div class="modal" v-if="editingLead">
          <div class="modal-content">
            <h3>Edit Lead</h3>
            <label>Name:</label>
            <input v-model="editingLead.name" />
            <label>Email:</label>
            <input v-model="editingLead.email" />
            <label>Status:</label>
            <select v-model="editingLead.status">
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="converted">Converted</option>
            </select>
            <button class="action-btn" @click="saveEdit">Save</button>
            <button class="action-btn" @click="cancelEdit">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <div class="code-container">
      <h2>Component Code</h2>
      <textarea name="code" id="codeText" cols="30" rows="10">
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lead List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <section class="main">
        <div class="container">
            <div class="lead-list">
                <h2>Lead List</h2>

                <!-- Search and Filter Options -->
                <div class="search-filter">
                    <input id="search" name="inputsearch" placeholder="Search by name..." />
                    <select name="selectOption" id="filterStatus">
                        <option value="">All</option>
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                    </select>
                </div>

                <!-- Lead List -->
                <div id="leadList" class="lead-item">
                    <!-- Lead items will be added here dynamically using JavaScript -->
                </div>

                <!-- Edit Lead Modal -->
                <div id="editLeadModal" class="modal">
                    <div class="modal-content">
                        <h3>Edit Lead</h3>
                        <label>Name:</label>
                        <input id="editName" />
                        <label>Email:</label>
                        <input id="editEmail" />
                        <label>Status:</label>
                        <select id="editStatus">
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="converted">Converted</option>
                        </select>
                        <button id="saveEdit" class="action-btn">Save</button>
                        <button id="cancelEdit" class="action-btn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="script.js"></script>
</body>
</html>
<!-- Script -->
document.addEventListener("DOMContentLoaded", function () {
    // Sample data (leads)
    let leads = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            status: "new",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            status: "contacted",
        },
        {
            id: 3,
            name: "Bob Johnson",
            email: "bob@example.com",
            status: "qualified",
        },
        // Add more lead data as needed
    ];

    // DOM elements
    const searchInput = document.getElementById("search");
    const filterStatusSelect = document.getElementById("filterStatus");
    const leadList = document.getElementById("leadList");

    // Event listeners
    searchInput.addEventListener("input", applyFilters);
    filterStatusSelect.addEventListener("change", applyFilters);

    // Initialize the lead list
    renderLeadList(leads);

    function renderLeadList(leadsData) {
        leadList.innerHTML = "";

        for (const lead of leadsData) {
            const leadItem = document.createElement("div");
            leadItem.classList.add("lead-item");

            const leadInfo = document.createElement("div");
            leadInfo.classList.add("lead-info");

            const leadName = document.createElement("p");
            leadName.classList.add("lead-name");
            leadName.textContent = lead.name;

            const leadEmail = document.createElement("p");
            leadEmail.classList.add("lead-email");
            leadEmail.textContent = lead.email;

            const leadStatus = document.createElement("p");
            leadStatus.classList.add("lead-status");
            leadStatus.textContent = lead.status;

            leadInfo.appendChild(leadName);
            leadInfo.appendChild(leadEmail);
            leadInfo.appendChild(leadStatus);

            const leadActions = document.createElement("div");
            leadActions.classList.add("lead-actions");

            if (lead.status === "new") {
                const convertButton = document.createElement("button");
                convertButton.classList.add("action-btn");
                convertButton.textContent = "Convert";
                convertButton.addEventListener("click", () => {
                    convertLead(lead);
                });
                leadActions.appendChild(convertButton);
            }

            const editButton = document.createElement("button");
            editButton.classList.add("action-btn");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", () => {
                editLead(lead);
            });
            leadActions.appendChild(editButton);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("action-btn");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                deleteLead(lead);
            });
            leadActions.appendChild(deleteButton);

            leadItem.appendChild(leadInfo);
            leadItem.appendChild(leadActions);

            leadList.appendChild(leadItem);
        }
    }

    function applyFilters() {
        const searchQuery = searchInput.value.toLowerCase();
        const filterStatus = filterStatusSelect.value;
        let filteredLeads = [...leads];

        if (searchQuery) {
            filteredLeads = filteredLeads.filter(
                (lead) =>
                    lead.name.toLowerCase().includes(searchQuery) ||
                    lead.email.toLowerCase().includes(searchQuery)
            );
        }

        if (filterStatus) {
            filteredLeads = filteredLeads.filter((lead) => lead.status === filterStatus);
        }

        renderLeadList(filteredLeads);
    }

    function editLead(lead) {
        const editNameInput = document.getElementById("editName");
        const editEmailInput = document.getElementById("editEmail");
        const editStatusSelect = document.getElementById("editStatus");

        editNameInput.value = lead.name;
        editEmailInput.value = lead.email;
        editStatusSelect.value = lead.status;

        const saveEditButton = document.getElementById("saveEdit");
        saveEditButton.addEventListener("click", () => {
            lead.name = editNameInput.value;
            lead.email = editEmailInput.value;
            lead.status = editStatusSelect.value;
            renderLeadList(leads);
            closeEditModal();
        });

        const cancelEditButton = document.getElementById("cancelEdit");
        cancelEditButton.addEventListener("click", () => {
            closeEditModal();
        });

        openEditModal();
    }

    function closeEditModal() {
        const editLeadModal = document.getElementById("editLeadModal");
        editLeadModal.style.display = "none";
    }

    function openEditModal() {
        const editLeadModal = document.getElementById("editLeadModal");
        editLeadModal.style.display = "block";
    }

    function deleteLead(lead) {
        const leadIndex = leads.findIndex((item) => item.id === lead.id);
        if (leadIndex !== -1) {
            leads.splice(leadIndex, 1);
            renderLeadList(leads);
        }
    }

    function convertLead(lead) {
        lead.status = "converted";
        renderLeadList(leads);
    }
});

<!-- CSS -->
.lead-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.search-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

input {
  flex-grow: 1;
  margin-right: 10px;
  padding: 5px;
}

select {
  width: 150px;
  padding: 5px;
}

.lead-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.lead-info {
  flex-grow: 1;
}

.lead-name {
  font-weight: bold;
}

.lead-actions button {
  margin-left: 10px;
  cursor: pointer;
}
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
.action-btn {
  background-color: rgb(233, 86, 33);
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
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
  background-color: #007bff;
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


      </textarea>
      <button id="copycode" @click="copyCode">Copy</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      editingLead: null,
      searchQuery: "",
      filterStatus: "",
      leads: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
          status: "new",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "987-654-3210",
          status: "contacted",
        },
        // Add more lead data as needed
      ],
    };
  },
  computed: {
    filteredLeads() {
      let filtered = [...this.leads];

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (lead) =>
            lead.name.toLowerCase().includes(query) ||
            lead.email.toLowerCase().includes(query)
        );
      }
      if (this.filterStatus) {
        filtered = filtered.filter((lead) => lead.status === this.filterStatus);
      }
      return filtered;
    },
  },
  methods: {
    qualifyLead(lead) {
      lead.status = "qualified";
    },
    convertToOpportunity(lead) {
      lead.status = "converted";
    },
    editLead(lead) {
      this.editingLead = Object.assign({}, lead);
    },
    saveEdit() {
      const index = this.leads.findIndex(
        (lead) => lead.id === this.editingLead.id
      );
      if (index !== -1) {
        this.leads[index] = Object.assign({}, this.editingLead);
        this.editingLead = null;
      }
    },

    deleteLead(lead) {
      const index = this.leads.findIndex((item) => item.id === lead.id);
      if (index !== -1) {
        this.leads.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.lead-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.search-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

input {
  flex-grow: 1;
  margin-right: 10px;
  padding: 5px;
}

select {
  width: 150px;
  padding: 5px;
}

.lead-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.lead-info {
  flex-grow: 1;
}

.lead-name {
  font-weight: bold;
}

.lead-actions button {
  margin-left: 10px;
  cursor: pointer;
}
.main {
  margin: 0;
  display: flex;
  padding: 20px 10px;
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
.action-btn {
  background-color: rgb(233, 86, 33);
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
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
  .lead-list {
    width: 100%;
    margin: 0;
  }

  input {
    flex-grow: 1;
    margin-right: 10px;
    padding: 5px;
  }

  select {
    width: 100px;
    padding: 5px;
  }

  .main {
    margin: 0;
    padding: 10px 10px;
    width: 100%;
  }
  .container {
    width: 100%;
    z-index: 0;
    margin: 0;
  }
  .code-container {
    width: 100%;
    margin: 0;
  }
  h2 {
    font-size: 16px;
  }
  textarea {
    width: 100%;
  }
  #copycode {
    padding: 6px 4px;
  }

  .modal {
    width: 100%;
  }

  .modal .btn {
    padding: 2px 4px;
  }
}
</style>
