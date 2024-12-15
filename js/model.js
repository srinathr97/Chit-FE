const chitFundApp = {
    chitGroups: [],
    members: [],
    transactions: [],
  
    addChitGroup(group) {
      this.chitGroups.push(group);
    },
  
    addMember(member) {
      this.members.push(member);
    },
  
    addTransaction(transaction) {
      this.transactions.push(transaction);
    },
  
    getChitGroups() {
      return this.chitGroups;
    },
  
    getMembers() {
      return this.members;
    },
  
    getTransactions() {
      return this.transactions;
    }
  };
  