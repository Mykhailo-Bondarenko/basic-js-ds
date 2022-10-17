const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data) {
    this.data = data ?? null;
    this.left = null;
    this.right = null;
  }
  root() {
    return this.data !== null ? this.data : null;
  }

  add(data) {
    if (!this.data) {
      this.data = data;
    }
    if (data < this.data && this.left) {
      this.left.add(data);
    } else if (data < this.data) {
      this.left = new BinarySearchTree(data);
    }
    if (data > this.data && this.right) {
      this.right.add(data);
    } else if (data > this.data) {
      this.right = new BinarySearchTree(data);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this.data === data) {
      return this;
    }
    if (data < this.data && this.left) {
      return this.left.find(data);
    }
    if (data > this.data && this.right) {
      return this.right.find(data);
    }
    return null;
  }

  remove(data) {
    if (data < this.data) {
      this.left = this.left.remove(data);
      return this;
    }
    if (data > this.data) {
      this.right = this.right.remove(data);
      return this;
    }
    if (!this.left && !this.right) {
      return null;
    }
    if (!this.left) {
      return this.right;
    }
    if (!this.right) {
      return this.left;
    }
    let result = this.right.min();
    this.data = result.data;
    this.right = this.right.remove(result.data);
    return this;
  }

  min() {
    if (!this.left) {
      return this;
    }
    return this.min(this.left);
  }

  max() {
    if (!this.right) {
      return this;
    }
    return this.min(this.right);
  }
}

module.exports = {
  BinarySearchTree
};