const UserMod = require('./user-model.js');
const db = require('../database/db-config');

describe('User Model Model', () => {
  describe('insert()', () => {
    it('should insert the provided users into DB', async () => {
      await UserMod.addUser({ name: 'Ali' });
      await UserMod.addUser({ name: 'Besir' });

      const user = await db('users');

      expect(user).toHaveLength(2);
    });
    it('should insert what was inserted', async () => {
      let user = await UserMod.addUser({ name: 'Tarik' });
      expect(user.name).toBe('Tarik');

      user = await UserMod.addUser({ name: 'MC' });
      expect(user.name).toBe('MC');
    });
    describe('delete()', () => {
      it('should delete the provided users into DB', async () => {
        await UserMod.addUser({ name: 'Ali' });

        await UserMod.removeUser(1);
        const user = await db('users');
        expect(user).toHaveLength(0);
      });
      it('should delete what was add', async () => {
        let user = await UserMod.removeUser({ name: 'Tarik' });
        expect(user.name).toBe(undefined);
      });
      it('should delete what was add', async () => {
        let user = await UserMod.removeUser({ name: 'Tarik' });
        expect(user.name).toBe(undefined);
      });
    });

    describe('get()', () => {
      it('should get  users into DB', async () => {
        await UserMod.addUser({ name: 'Ali' });

        const user = await db('users');
        expect(user).toHaveLength(1);
      });
      it("should get  what i've add into DB", async () => {
        await UserMod.addUser({ name: 'Ali' });

        const [user] = await db('users');
        expect(user).toEqual({ id: 1, name: 'Ali' });
      });
    });

    beforeEach(async () => {
      await db('users').truncate();
    });
  });
});
