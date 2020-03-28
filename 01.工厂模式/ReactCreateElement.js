class VNode {
  //...
}
React.createElement = function(tag, attrs, children) {
  return new VNode(tag, attrs, children);
};
