import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function App() {

  const forwardSlide = () => {
    document.querySelector('.carousel-control-next-icon').click();
  }

  const backwardSlide = () => {
    document.querySelector('.carousel-control-prev-icon').click();
  }

  const [firstSlideDisabled, setFirstSlideDisabled] = React.useState(false);
  const [field1, setField1] = React.useState("");
  const [field2, setField2] = React.useState("");


  React.useEffect(() => {
    setFirstSlideDisabled(!field1 || !field2);
  }, [field1, field2]);


  return (
    <body>
      <div className='App' style={{ display: 'block', width: 700, padding: 30 }}>
        <Form>

          <Carousel>
            <Carousel.Item >
              <div className='first-slide'>
                <h4>React-Bootstrap Carousel Component</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>input field 1</Form.Label>
                  <Form.Control type="text" placeholder="type something" value={field1} onChange={(e) => setField1(e.target.value)} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <Form.Label>input field 2</Form.Label>
                  <Form.Control type="text" placeholder="type something" value={field2} onChange={(e) => setField2(e.target.value)} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <Button variant="primary" disabled={firstSlideDisabled} onClick={() => {
                    forwardSlide();
                  }}>
                    Next
                  </Button>
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                alt="Image Two"
              />
              <Carousel.Caption>
                <h2>form set 2</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Form>
      </div>
    </body>
  );
}

export default App;
