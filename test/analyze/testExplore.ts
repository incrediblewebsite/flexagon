namespace Flexagonator {

  describe('Explore.checkNext', () => {
    it('should find all states accessible using a small set of flexes', () => {
      const flexagon = makeFlexagon([[1, 2], 3, [4, 5], 6]) as Flexagon;

      var flexes: Flexes = {};
      flexes[">"] = makeFlex("shift right", [1, 2, 3, 4], [2, 3, 4, 1], FlexRotation.Mirror) as Flex;
      flexes["<"] = makeFlex("shift left", [1, 2, 3, 4], [4, 1, 2, 3], FlexRotation.Mirror) as Flex;
      flexes["^"] = makeFlex("turn over", [1, 2, 3, 4], [-4, -3, -2, -1], FlexRotation.None) as Flex;
      flexes["A"] = makeFlex("A", [[1, 2], 3, 4, 5], [1, [2, 3], 4, 5], FlexRotation.None) as Flex;
      flexes["B"] = makeFlex("B", [[1, 2], 3, [4, 5], 6], [1, 2, [3, 4], [5, 6]], FlexRotation.None) as Flex;

      const explore = new Explore(flexagon, flexes);
      expect(explore.getTotalStates()).toBe(1);
      expect(explore.getExploredStates()).toBe(0);

      // step
      expect(explore.checkNext()).toBeTruthy();
      expect(explore.getTotalStates()).toBe(8);
      expect(explore.getExploredStates()).toBe(1);

      // keep going till done
      while (explore.checkNext()) {
      }
      expect(explore.getTotalStates()).toBe(21);
      expect(explore.getExploredStates()).toBe(21);
    });
  });

}
