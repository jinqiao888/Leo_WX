module.exports = app => {
  class UserService extends app.Service {
    async getUser (account){
      try {
        let hasUser = await this.ctx.model.User.find({account})
        return hasUser
      } catch (error) {
        console.log(error)
      }
    }
    async getOneUser (account){
      try {
        let hasUser = await this.ctx.model.User.findOne({account})
        return hasUser
      } catch (error) {
        console.log(error)
      }
    }
    async register (data){
        try {
            let status = await this.ctx.model.User.create(data)
            // 判断注册是否成功
            return status
        } catch (error) {
            console.log(error)
        }
    }

    
    async createUser(data) {
      return new Promise(async (resolve, reject) => {
          this.ctx.model.User({
              createDate: new Date(), // 创建时间
              updateDate: new Date(), // 修改时间
              ...data
          }).save((err, data) => {
              if (err) {
                  console.log(err);
                  reject(err);
                  return
              }
              resolve(data)
          });
      })
  }
  }
  return UserService
}
