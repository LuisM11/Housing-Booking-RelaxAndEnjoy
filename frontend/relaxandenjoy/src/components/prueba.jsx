import React from "react";
import { Form, DatePicker, Button } from "antd";
import moment from "moment";

function Prueba() {
  const [form] = Form.useForm();

  const datePickerOptions = {
    rules: [
      { type: "array", required: true, message: "Please select a date range" },
    ],
  };
  const handleFormSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Form form={form} onFinish={handleFormSubmit}>
      <Form.Item name="dateRange" label="Date Range" {...datePickerOptions}>
        <DatePicker.RangePicker
          presets={{
            "Last 7 Days": [moment().subtract(7, "days"), moment()],
            "Last 30 Days": [moment().subtract(30, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [
              moment().subtract(1, "month").startOf("month"),
              moment().subtract(1, "month").endOf("month"),
            ],
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export default Prueba;
