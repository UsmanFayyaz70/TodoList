import React from "react";
import { Row, Col, Input, Button } from "antd";

const AbcDesign = () => {
    return (
        <Row >
            <Col xl={24} xs={24} md={24} lg={24}>
                <Row>
                    <Col xl={13} xs={8} md={8} lg={8} align="center">
                        <Input placeholder="Enter your Username" />
                    </Col>
                    <Col xl={13} xs={8} md={8} lg={8} align="center">
                        <Input placeholder="Enter your password" />
                    </Col>
                    <Col xl={13} xs={12} md={12} lg={12} align="center">
                        <Button>Login</Button>
                    </Col>
                </Row>

            </Col>
        </Row>
    )



}

export default AbcDesign