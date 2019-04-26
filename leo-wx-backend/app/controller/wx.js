const getWxDetail = require('../until/wxSpider').getWxDetail;

module.exports = app => {
  class WxController extends app.Controller {
    async index (){
        this.ctx.body = 'hello leo , this is wx page';
    }

    /**
     * 爬取文章信息
     */
    async add (){
        try {
            const body = this.ctx.request.body;
            const result = await getWxDetail(body.url);
            this.ctx.service.wx.add(result);
            console.log(result)
            this.ctx.body = {
                code: 200,
                message: `成功添加文章《${result.title}》`,
                data: result
            }
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * 预览一篇文章
     */
    async preview (){
        try {
            const body = this.ctx.request.body;
            const result = await getWxDetail(body.url);
            this.ctx.body = {
                code: 200,
                message: `成功预览文章《${result.title}》`,
                data: result
            }
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * 读取文章列表
     */
    async getList (){
        try {
            // this.ctx.service.wx.getList();
            // let list = await this.ctx.model.Wx.find().sort({_id: -1}).limit(3)
            let data  = await this.ctx.service.wx.find();
            this.ctx.body = {
                code: 200,
                message: `成功读取文章列表`,
                data: {
                    list: data.list,
                    size: data.total
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * 读取文章列表 含 分页参数
     */
    async list (){
        try {
            // const { pageSize = 10, pageIndex = 1 } = option
            const option =  { 
                pageSize : 10, 
                pageIndex : 1,
                sort: -1
            }
            let list = await this.ctx.service.wx.find(option)
            this.ctx.body = {
                code: 200,
                message: `成功读取文章列表`,
                data: list
            }
        } catch (error) {
            console.log(error)
        }
    }
    /**
     * 删除指定id的文章
     * @param {Object} id 需要删除文章的id
     */
    async remove (id){
        try {
            const body = this.ctx.request.body
            const status = await this.ctx.service.wx.remove(body.id)
            console.log(status)
            if(status.ok && status.deletedCount === 1){
                this.ctx.body = {
                    code: 200,
                    message: `文章删除成功，id为${body.id}`,
                    data: status
                }
            }else{
                this.ctx.body = {
                    code: 400,
                    message: `文章删除失败，id为${body.id}`,
                    data: status
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

  }
  return WxController
}
