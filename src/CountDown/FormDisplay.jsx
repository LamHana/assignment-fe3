import { Button, Form, InputNumber } from "antd";
import CountdownTimer from "./CountDownTimer";
import { useState } from "react";
import "./CountDown.css";
const FormDisplay = () => {
  const [count, setCount] = useState(null);
  const [isStop, setIsStop] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const target_date_in_ms =
      values.day * 24 * 60 * 60 * 1000 +
      values.hour * 60 * 60 * 1000 +
      values.minute * 60 * 1000 +
      values.second * 1000;
    const NOW_IN_MS = new Date().getTime();
    if (isStop == "start") {
      setCount(target_date_in_ms + NOW_IN_MS);
    } else {
      setCount((timeLeft || target_date_in_ms) + NOW_IN_MS);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onStart = () => {
    setIsStop("start");
  };

  const onStop = () => {
    setIsStop("stop");
  };

  const onContinue = () => {
    setIsStop("continue");
  };

  const onReset = () => {
    form.resetFields();
    setCount(null);
  };

  return (
    <>
      <Form
        className="form-count-down"
        form={form}
        name="basic"
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="inline"
        style={{
          maxWidth: 700,
        }}
        initialValues={{
          day: 0,
          hour: 0,
          minute: 0,
          second: 0,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Day"
          name="day"
          rules={[{ type: "number", min: 0, max: 23 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Hour"
          name="hour"
          rules={[{ type: "number", min: 0, max: 23 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Minute"
          name="minute"
          rules={[{ type: "number", min: 0, max: 60 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Second"
          name="second"
          rules={[{ type: "number", min: 0, max: 60 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 24,
            span: 24,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={onStart}
            className="btn s-btn"
          >
            Start
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 24,
            span: 24,
          }}
        >
          <Button
            className="btn stop-btn"
            type="primary"
            htmlType="submit"
            onClick={onStop}
          >
            Stop
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 24,
            span: 24,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className="btn c-btn"
            onClick={onContinue}
          >
            Continue
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 24,
            span: 24,
          }}
        >
          <Button htmlType="button" onClick={onReset} className="btn r-btn">
            Reset
          </Button>
        </Form.Item>
      </Form>

      {count && (
        <CountdownTimer
          targetDate={count}
          isStop={isStop}
          setTimeLeft={setTimeLeft}
        />
      )}
    </>
  );
};
export default FormDisplay;
