const view = {
    renderChitGroups(groups) {
      const chitGroupList = document.getElementById("chit-group-list");
      chitGroupList.innerHTML = "";
      groups.forEach((group, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${group.name}</td>
          <td>${group.totalAmount}</td>
          <td>${group.duration}</td>
          <td>${group.membersCount}</td>
          <td>
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        `;
        chitGroupList.appendChild(row);
      });
    },
  
    renderMembers(members) {
      const memberList = document.getElementById("member-list");
      memberList.innerHTML = "";
      members.forEach((member, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${member.name}</td>
          <td>${member.role}</td>
          <td>${member.joinedAt}</td>
        `;
        memberList.appendChild(row);
      });
    },
  
    renderTransactions(transactions) {
      const transactionList = document.getElementById("transaction-list");
      transactionList.innerHTML = "";
      transactions.forEach((transaction, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${transaction.user}</td>
          <td>${transaction.amount}</td>
          <td>${transaction.type}</td>
          <td>${transaction.date}</td>
        `;
        transactionList.appendChild(row);
      });
    }
  };
  