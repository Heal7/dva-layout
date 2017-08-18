import React, {Component} from 'react'
import { Form, Input, Select, Checkbox, DatePicker, Upload, Radio, Button, Modal, message, Icon } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const RangePicker = DatePicker.RangePicker

class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        visible: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('收到表单值：', this.props.form.getFieldsValue())
    this.props.form.resetFields();
  }
  
  showModal = () => {
    this.setState({ visible: true })
  }

  hideModal = () => {
    this.setState({ visible: false })
  }

  normFile = (e) => {
    console.log('upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 }
    }
    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
    })(
        <Select style={{ width: 60 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
    );

    const success = () => {
        message.success('操作成功！')
    }
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem
            {...formItemLayout}
            label="输入框"
            required>
            <Input placeholder="Please enter..."
            {...getFieldDecorator('username')} />
        </FormItem>

        <FormItem
            {...formItemLayout}
            label="日期选择器"
            required>
            {getFieldDecorator('range-picker')(
                <RangePicker />
            )}
        </FormItem>

        <FormItem
            {...formItemLayout}
            label="手机号">
            {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
        </FormItem>

        <FormItem
            {...formItemLayout}
            label="文本域">
            <Input type="textarea" rows="3" {...getFieldDecorator('content')}/>
        </FormItem>

        <FormItem
            {...formItemLayout}
            label="Select">
            {getFieldDecorator('select', {
                rules: [
                    {required: true, message:'Please select your country...'}
                ]
            })(
                <Select placeholder="Please select a country">
                    <Option value="China">China</Option>
                    <Option value="USA">U.S.A</Option>
                    <Option value="Japan">Japan</Option>
                </Select>
            )}
        </FormItem>

        <FormItem
            {...formItemLayout}
            label="Select多选"
        >
            {getFieldDecorator('select-multiple', {
            rules: [
                { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
            })(
                <Select mode="multiple" placeholder="Please select users">
                  <Option value="yhj">YHJ</Option>
                  <Option value="jyz">JYZ</Option>
                  <Option value="lh">LH</Option>
                </Select>
            )}
        </FormItem>
        
        <FormItem
            {...formItemLayout}
            label="Radio单选"
        >
            {getFieldDecorator('radio-group')(
            <RadioGroup>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </RadioGroup>
        )}
        </FormItem>

        <FormItem
            label="Checkbox 多选框"
            {...formItemLayout}
        >
            <Checkbox {...getFieldDecorator('checkboxItem1')}>选项一</Checkbox>
            <Checkbox {...getFieldDecorator('checkboxItem2')}>选项二</Checkbox>
            <Checkbox {...getFieldDecorator('checkboxItem3')}>选项三</Checkbox>
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Upload">
            {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
            })(
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                        <Icon type="upload"/>Click to upload
                    </Button>
                </Upload>
            )}
        </FormItem>

        <FormItem
            wrapperCol={{ span: 8, offset: 5 }}>
            <Button type="primary" htmlType="submit" onClick={success}>确定</Button>&nbsp;&nbsp;&nbsp;
            <Button type="ghost" onClick={this.showModal}>点击有惊喜</Button>
        </FormItem>
        <Modal title="登录" visible={this.state.visible} onOk={this.hideModal} onCancel={this.hideModal}>
            这是一个Modal
        </Modal>
      </Form>
    )
  }
}

export default Form.create()(FormComponent)
