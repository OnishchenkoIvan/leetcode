var middleNode = function (head) {
  let fast = head;
  while (fast != null && fast.next != null) {
    head = head.next;
    fast = fast.next.next;
  }
  return head;
};
