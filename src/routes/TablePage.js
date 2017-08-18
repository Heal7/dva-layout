import React from 'react'
import {Table, Pagination, Popconfirm, Icon} from 'antd'
import { PAGE_SIZE } from '../utils/constants'


function TableComponent() {
  const columns = [{
      title: 'Name',
      dataIndex: 'name',
      width: '20%'
  },{
      title: 'Age',
      dataIndex: 'age',
      width: '20%',
  },{
      title: 'Address',
      dataIndex: 'address',
      width: '20%'
  },{
      title: 'Remark',
      dataIndex: 'remark',
      width: '20%',
      render(text) {
        return <a href={text} target="_blank">Github</a>
      }
  },{
      title: 'Operation',
      dataIndex: 'operation',
      width: '20%',
      render() {
        return (
          <span>
            <a>Edit </a>
            <Popconfirm title="Confirm to delete?">
              <a href=""> Delete</a>
            </Popconfirm>
          </span>
        )
      }
  }];

  const tableData = [];
  for (let i = 0; i < 46; i++) {
    tableData.push({
      key: i,
      name: `YangHJ ${i+1}`,
      age: '18',
      address: `张衡路润和总部${i+1}号`,
      remark: 'https://github.com/Heal7',
    })
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      console.log(selectedRowKeys)
    }
  }

  const pagination = {
    total: tableData.length,
    showSizeChanger: true,
    onShowSizeChange(current, pageSize) {
      console.log('Current: ', current, '; PageSize: ', PAGE_SIZE)
    },
    onChange(current) {
      console.log('Current: ', current)
    }
  }

  return (
    <Table 
      rowSelection={rowSelection} 
      columns={columns} 
      dataSource={tableData} 
      bordered 
      pagination={pagination} />
  )
}

export default TableComponent;
