import React from 'react';
import { Form, Input, Button, message } from 'antd';
import styles from '../../routes/QuestionPage.css';
const FormItem = Form.Item;

function QuestionForm({form, formIsShow, onAddQuestion, onToggleForm}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        onAddQuestion(values);
        form.resetFields();
        message.success('提问成功！');
      }
    })
  }
  const formDisplay = formIsShow ? 'block' : 'none';
  const { getFieldDecorator } = form;
  
  return (
    <Form onSubmit={handleSubmit} style={{display: formDisplay, overflow:'hidden', marginBottom:'20px'}}>
      <label style={{fontWeight:'bold',fontSize:'16px'}}>问题</label>
      <FormItem title="问题" hasFeedback>
        {
          getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入问题的标题'}]
          })(
            <Input placeholder="您的问题的标题是..." onPressEnter={handleSubmit} />
          )
        }
      </FormItem>
      <FormItem >
        {
          getFieldDecorator('description')(
            <Input type="textarea" rows="4" placeholder="问题的描述..." onPressEnter={handleSubmit} />
          )
        }
      </FormItem>
      <Button type="primary" htmlType="submit" className={styles.confirm} onClick={handleSubmit}>确认</Button>
      <Button type="default" htmlType="reset" className={styles.cancel} onClick={onToggleForm}>取消</Button>
    </Form>
  );
}

export default Form.create()(QuestionForm)
