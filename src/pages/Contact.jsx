import React, { useRef } from 'react';
import CommonSection from '../components/ui/Common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';


const Contact = () => {
  
  const nameRef = useRef('');
  const emailRef = useRef('');
  const subjectRef = useRef('');
  const messageRef = useRef('');


  const handleSubmit = e => {
    e.preventDefault()
  };

  return (
    <>
    <CommonSection title='Contact'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' className='m-auto text-center'> 
            <h2>Drop a Message</h2>
            ,<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus natus voluptas quasi earum eius rerum, consequuntur excepturi deleniti magni nemo?</p>
            <div className='contact mt-4'>
              <form onSubmit={handleSubmit}> 
               <div className="form__input">
                <input type='text' placeholder='Enter your name' ref={nameRef}/>
               </div>
               <div className="form__input">
                <input type='email' placeholder='Enter your mail' ref={emailRef}/>
               </div>
               <div className="form__input">
                <input type='text' placeholder='Enter subject' ref={subjectRef}/>
               </div>
               <div className="form__input">
                <textarea rows='7' placeholder='Write your message' ref={messageRef}></textarea>
               </div>
               <button className='send__btn' 
               style={{
                border:'none', 
                padding:'7px 25px', 
                borderRadius:'5px',
                marginTop:'20px'
                }}>Send message</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
      
    </>
  )
}

export default Contact
