const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class TreeNode {
  constructor(data) {
    this.data = data;
    this.leftLeaf = null;
    this.rightLeaf = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootData = null;
  }

  root() {
    return this.rootData;
  }


  innerNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.leftLeaf === null) {
        node.leftLeaf = newNode;
      } else {
        this.innerNode(node.leftLeaf, newNode);
      }
    } else {
      if (node.rightLeaf === null) {
        node.rightLeaf = newNode;
      } else {
        this.innerNode(node.rightLeaf, newNode);
      }
    }
  };

  add(data) {
    const node = new TreeNode(data);
    if (this.rootData === null) {
      this.rootData = node;
    } else { this.innerNode(this.rootData, node) };
  };

  has(data) {
    let currentNode = this.rootData;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.leftLeaf;
      } else {
        currentNode = currentNode.rightLeaf;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootData;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.leftLeaf;
      } else {
        currentNode = currentNode.rightLeaf;
      }
    }
    return null;
  }

  remove(data) {
    let currentNode = this.rootData;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        currentNode.data = currentNode.data * 1.1;
        return currentNode.data;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.leftLeaf;
      } else {
        currentNode = currentNode.rightLeaf;
      }
    }
    return null;
  }

  min() {
    if (this.rootData === null) {
      return null;
    }

    let currentNode = this.rootData;
    while (currentNode.leftLeaf !== null) {
      currentNode = currentNode.leftLeaf;
    }

    return currentNode.data;
  }

  max() {
    if (this.rootData === null) {
      return null;
    }

    let currentNode = this.rootData;
    while (currentNode.rightLeaf !== null) {
      currentNode = currentNode.rightLeaf;
    }

    return currentNode.data;
  }
}
module.exports = {
  BinarySearchTree
};