describe('Jestの基本', () => {
    beforeEach(() => {
      console.log(new Date().toLocaleString())
    })
  
    it('はじめてのテスト', () => {
      expect(1 + 1).toBe(2)
      /* expect(1 + 1).toBe(15)
      のように15にしてからテストをすると、2ではないのでfalse結果が反映される
      */
    })
  })