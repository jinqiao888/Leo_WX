/**
 * Controller - user
 * @author leo
 * @created 2019-04-22
 * @updated 2019-04-22 重构 异常错误先不处理
 */
module.exports = app => {
  // 定义创建接口的请求参数规则
  const createRule = {
    tel: 'string',
    password: 'string',
  };
  
  class UserController extends app.Controller {
    async register (){
      const { ctx } = this
      try {
        const body = ctx.request.body
        const hasUser = await ctx.service.user.getUser(body.account)
        if(hasUser && hasUser.length > 0) throw new Error({message:'帐号已存在，请修改'})
        const status = ctx.service.user.register(body)
        if(!status) throw new Error({message:'帐号注册失败'})
        ctx.body = {
          code: 200,
          message: `帐号注册成功`,
          data: body,
          success: true
        }
      } catch (error) {
        return this.fail(ctx.ERROR_CODE, 'aaaaaaaa')
        console.log('error',  error)        
        ctx.body = {
          code: 400,
          data: {error},
          success: false
        }
      }
    }

    async login (){
      try {
        const body = this.ctx.request.body
        const hasUser = await this.ctx.service.user.getOneUser(body.account)
        // TODO: 判断是否是管理员
        if(hasUser){
          // 存在用户
          if(body.password === hasUser.password){
            this.ctx.body = {
                code: 200,
                message: `登录成功`,
                data: body,
                success: true
            }
          }
        }else{
          this.ctx.throw(400, '帐号已存在，请修改', {data:body})
          // this.ctx.body = {
          //   code: 400,
          //   message: `帐号不存在`,
          //   data: body,
          //   success: false
          // }
        }
      } catch (error) {
          console.log(error)
      }
    }

    async create() {
      const ctx = this.ctx;
      ctx.validate(createRule, ctx.request.body);
      try {
          const user = await ctx.service.user.findOneUser({tel: ctx.request.body.tel});
          if(user) {
              throw new Error('该手机号已经注册过用户');
          }
          const newUser = await ctx.service.user.createUser(ctx.request.body);
          ctx.body = {
              code: 200,
              data: newUser,
              success: true,
              msg: ``
          };
      }
      catch (err) {
          throw err;
      }

  };
  }
  return UserController
}
