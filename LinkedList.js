/**
 * Created by albertwchang on 1/8/16.
 */

function LinkedList(name) {
  // Instantiating does not yet have a head or tail
  this.name = name;
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.push = function(name) {
  // create new node, and then assign it to the previous node's reference
  var newNode = new Node(name, null);
  /**
   * When head and tail are null, initialize linked list
    */
  if (!this.tail) {
    this.head = new Node("head", newNode);
    this.tail = new Node("tail", null);
    newNode.ref = this.tail;
  } else {
    /**
     * traverse the current list and assign newNode to tail's ref param
     */
    var currentNode = this.head, prevNode = null;

    while(currentNode != null) {
      if (!currentNode.ref) {
        newNode.ref = currentNode; // currentNode is tail node
        prevNode.ref = newNode;
        console.log("new node added: ", newNode.name)
      }

      prevNode = currentNode;
      currentNode = currentNode.ref;
    }
  }
}

LinkedList.prototype.toString = function() {
  console.log("Checking linked list...");

  var currentNode = this.head;
  while (currentNode != null) {
    console.log(currentNode.name, currentNode.ref ? ", " : "...");
    currentNode = currentNode.ref;
  }
}

LinkedList.prototype.reverse = function() {
  var prevNode = null, currentNode = this.tail = this.head;

  while(currentNode != null) {
    var nextNode = currentNode.ref;
    currentNode.ref = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  this.head = prevNode;
}

/**
 *
 * @param name
 * @param ref
 * @constructor
 */
function Node(name, ref) {
  this.name = name;
  this.ref = ref;
}

Node.prototype.setRef = function(ref) {
  // ref should either be null or a Node object
  this.ref = (typeof ref === Node) ? ref : null;
}