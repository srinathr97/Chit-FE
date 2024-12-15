// Function to fetch chit groups and populate the table
async function fetchChitGroups() {
    try {
      const response = await fetch("http://localhost:5000/api/chits", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "Allow",
        },
      });
  
      if (response.ok) {
        const chitGroups = await response.json();
        populateChitGroupsTable(chitGroups);
      } else {
        console.error("Failed to fetch chit groups");
        alert("Failed to load chit groups. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching chit groups:", error);
      alert("An error occurred while fetching chit groups.");
    }
  }
  
  // Function to populate the chit groups table
  function populateChitGroupsTable(chitGroups) {
    const chitGroupList = document.getElementById("chit-group-list");
    chitGroupList.innerHTML = ""; // Clear existing rows
  
    chitGroups.forEach((group, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${group.name}</td>
        <td>${group.chit_value}</td>
        <td>${group.duration}</td>
        <td>${group.members ? group.members.length : 0}</td>
        <td>
          <button class="btn btn-info btn-sm">View</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </td>
      `;
  
      chitGroupList.appendChild(row);
    });
  }
  
  // Function to create a new chit group
  async function createChitGroup(event) {
    event.preventDefault();
  
    var name = document.getElementById("name1").value;
    const chitValue = document.getElementById("chit-value").value;
    const contributionAmount = document.getElementById("contribution-amount").value;
    const duration = document.getElementById("duration").value;
    const createdBy = document.getElementById("created-by").value;
  
    const payload = {
      name,
      chit_value: chitValue,
      contribution_amount: contributionAmount,
      duration,
      created_by: createdBy,
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/chits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        alert("Chit group created successfully!");
        fetchChitGroups(); // Refresh the chit groups table
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("createGroupModal")
        );
        modal.hide();
      } else {
        console.error("Failed to create chit group");
        alert("Failed to create chit group. Please try again.");
      }
    } catch (error) {
      console.error("Error creating chit group:", error);
      alert("An error occurred while creating the chit group.");
    }
  }


  // Function to fetch members and populate the table
async function fetchMembers() {
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const members = await response.json();
        populateMembersTable(members);
      } else {
        console.error("Failed to fetch members");
        alert("Failed to load members. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching members:", error);
      alert("An error occurred while fetching members.");
    }
  }
  
  // Function to populate the members table
  function populateMembersTable(members) {
    const memberList = document.getElementById("member-list");
    memberList.innerHTML = ""; // Clear existing rows
  
    members.forEach((member, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${member.name}</td>
        <td>${member.role}</td>
        <td>${new Date(member.joinedAt).toLocaleDateString()}</td>
      `;
  
      memberList.appendChild(row);
    });
  }
  
  
  
  
  // Event listeners
  document
    .getElementById("create-group-form")
    .addEventListener("submit", createChitGroup);
  
//  document.addEventListener("DOMContentLoaded", fetchMembers);
  