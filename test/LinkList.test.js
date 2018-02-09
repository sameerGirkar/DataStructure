describe("LinkList", function () {
  var linkList;
  describe("addNodeAtHead function test suit,", function() {
    beforeEach(function () {
      linkList = new LinkList();
    });
    it("should be able to add node at head", function () {
      linkList.addNodeAtHead('firstnode');
      expect(linkList.head.value).toBe('firstnode');
    });
  });
});
