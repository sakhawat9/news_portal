import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import News from "../common/News";
import Sidebars from "../Home/Sidebars";

const AllNews = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://boiling-plateau-88262.herokuapp.com/news")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <section className="py-5">
      <Container>
        <Row>
          {services.length === 0 ? (
            <div className="text-center w-100">
              <Spinner animation="grow" />
            </div>
          ) : (
            <Row>
              <Col md={8}>
                <Row>
                  {services.map((service) => (
                    <News service={service} key={service._id}></News>
                  ))}
                </Row>
              </Col>
              <Col md={4}>
                <Sidebars />
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default AllNews;
