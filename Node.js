/**
 * Created by albertwchang on 1/8/16.
 */

function Node(name, ref) {
  this.name = name;
  this.ref = ref;
}

Node.prototype.setRef = function(ref) {
  // ref should either be null or a Node object

  if ((typeof ref != Node) || ref !== null)
    this.ref = ref;
}