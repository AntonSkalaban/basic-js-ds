const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
   return this.rootNode
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data)

    function addWithin(node, data){
      if(!node){
        return new Node(data)
      }

      if(node.data === data) {
        return node
      }
      
      if(data < node.data){
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }
      return node
    }
    // const newNode = new Node(data)  
    // if(!this.rootNode){
    //   this.rootNode = newNode;
    //     return
    // }

    // let cuurentNode = this.rootNode;

    // while(cuurentNode){
    //   if(newNode.data < cuurentNode.data){
    //     if(!cuurentNode.left) {
    //       cuurentNode.left = newNode
    //       return
    //     }
         
    //     cuurentNode = cuurentNode.left;

    //   } else {
    //     if(!cuurentNode.right) {
    //       cuurentNode.right = newNode
    //       return
    //     }

    //       cuurentNode = cuurentNode.right;
    //   }
    // }
  }

  has(data) {
    return searchWithin(this.rootNode, data)

    function searchWithin(node, data) {
      if(!node){
        return false
      }

      if(node.data === data){
        return true
      }

      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data) 

    }
  }

  
  find(data) {
    const recursion = (node) => {
      if(data !== node.data){

        if(data > node.data){
            if(node.right=== null){
              return null
          } else {
             return recursion(node.right)
          }

        } else if(data < node.data){
            if(node.left === null){
                return null
            }else{
               return recursion(node.left)
            }
        }

      } else {
        return node
      }
    }
     return recursion(this.rootNode)
    }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data)

    function removeNode(node, data){
      if(!node){
        return null
      }

      if(data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if(node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if(!node.left && !node.right) {
          return null
        }
      

      if(!node.left) {
        node = node.right
        return node
      }

      if(!node.right) {
        node = node.left
        return node
      }

      let minFromRight = node.right
      while(minFromRight.left) {
        minFromRight = minFromRight.left
      }
      node.data = minFromRight.data
      
      node.right = removeNode(node.right, minFromRight.data)

      return node

      }
    }
  }



  min() {
    // if (!this.rootNode) {
    //   return
    // }

    // let node = this.root
    // while(node.left){
    //   node = node.left
    // }

    // return node.data
    const recursion = (leftNodes) => {
      if(leftNodes.left === null){
        return leftNodes.data
       }
      return recursion(leftNodes.left)
    }  
    
    return recursion(this.rootNode)
   }
  
  max() {
    const recursion = (rightNodes) => {
      if(rightNodes.right === null){
        return rightNodes.data
       }
      return recursion(rightNodes.right)
    }  
    
    return recursion(this.rootNode)
  }
}

const tree = new BinarySearchTree()


module.exports = {
  BinarySearchTree
};