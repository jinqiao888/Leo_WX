import React from 'react';
import { Table, Button, Tag, Icon, message} from 'antd';
import { URL } from '../config/url';
import { withRouter } from 'react-router';
import { util_fetch } from '../util/fetch';

import DetaulLogo from '../images/wx/default_wx.png';


class WxListComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading : false,
            pagination: {},
            columns : [{
                title: '序号',
                dataIndex: '_id',
                align: 'center',
                width: '15%',
              }, {
                title: '标题',
                dataIndex: 'title',
                align: 'center',
                width: '30%',
                render: (text, record) => <a target="_blank" href={record.url ? record.url : 'javascritp:;'} >{record.title}</a>,
              }, {
                title: '公众号名称',
                dataIndex: 'gzhName',
                align: 'center',
                width: '10%',
                render: tags => tags ==='前端自习课' ? <Tag color='green'>{tags}</Tag> : <Tag color='geekblue'>{tags}</Tag>
              }, {
                title: '公众号介绍',
                dataIndex: 'gzhIntroduce',
                align: 'center',
                width: '20%',
              }, {
                title: '封面',
                dataIndex: 'header',
                align: 'center',
                width: '10%',
                render: (text, record) => <img src={record.header ? record.header :DetaulLogo} />
              }, {
                title: '操作',
                align: 'center',
                width: '10%',
                render: (text, record) => (
                    <span>
                        <Button 
                            type="danger" shape="round" icon="delete"
                            onClick={e => this.delList(record)}
                        ></Button>
                    </span>
                )
              }
            ]
        };
        this.getList = this.getList.bind(this)
        this.addList = this.addList.bind(this)
        this.delList = this.delList.bind(this)
    }
    
    componentDidMount(){
        this.getList()
    }
    getList (){
        fetch(URL.BASEURL + URL.WX_URL + '/getList', {method:'GET'})
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    data: data.data.list,
                    loading: true
                })
            })
            .catch(e => console.log('错误:', e))
    }

    changePage (pagination, filters, sorter) {
        const pager = { ...this.state.pagination }
        this.setState({
            pagination: pager
        })
    }
    addList(){
        console.log(this)
        this.props.history.push('/wx_add')
    }

    delList(data){
        const options = util_fetch.setHeaders('POST', {id: data._id})
        fetch(URL.BASEURL + URL.WX_URL + '/remove', options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.code === 200 ? message.success(data.message) : message.warn(data.message)
            })
            .catch(e => message.warn(data.message))
    }
    render (){
        const {columns} = this.state
        return (
            <div>
                <Button onClick={this.addList} type="primary" >添加文章</Button>
                <br />
                <Table className="wx-list-table"
                    scroll={{ y: 430 }}
                    columns={columns} 
                    dataSource={this.state.data} 
                    rowKey='_id'
                    bordered
                />
            </div>
        )
    }
}
export default withRouter(WxListComponent);