//icons
import { BsArrowRight } from 'react-icons/bs';

//framer
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../../variants';

// import emailjs from 'emailjs-com';
import emailjs from 'emailjs-com';

//import react and useState
import React, { useState } from 'react';

// import modal
import Modal from 'react-modal';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

  const handleSuccessClose = () => {
    setSuccessModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || subject === '' || message === '') {
      setModalMessage('Please fill out all sections before sending the email.');
      setModalIsOpen(true);
      return;
    }

    if (!validateEmail(email)) {
      setModalMessage("Invalid email format. Couldn't send mail.");
      setModalIsOpen(true);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        'service_qvyd0j7', // Replace with your service ID
        'template_lek6mly', // Replace with your template ID
        templateParams,
        'RU7SjXaqjxtcjcMgS' // Replace with your user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setSuccessModalIsOpen(true);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalMessage('');
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let&rsquo;s <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}
          >
            <div className='flex gap-x-6 w-full'>
              {/* Name Input */}
              <input
                type='text'
                placeholder='Name'
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ textTransform: 'none', letterSpacing: 'normal' }}
              />
              {/* Email Input */}
              <input
                type='text'
                placeholder='E-mail'
                className='input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ textTransform: 'none', letterSpacing: 'normal' }}
              />
            </div>
            {/* Subject Input */}
            <input
              type='text'
              placeholder='Subject'
              className='input'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{ textTransform: 'none', letterSpacing: 'normal' }}
            />
            {/* Message Textarea */}
            <textarea
              placeholder='Message'
              className='textarea'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ textTransform: 'none', letterSpacing: 'normal' }}
            ></textarea>
            {/* Submit Button */}
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mb-10'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&rsquo;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Alert"
        className="modal fixed inset-0 flex items-center justify-center"
        overlayClassName="overlay fixed inset-0 bg-black opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className=" prose text-center text-lg font-semibold mb-4">{modalMessage}</p>
          <button
            onClick={closeModal}
            className="block mx-auto bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark transition duration-300"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={successModalIsOpen}
        onRequestClose={handleSuccessClose}
        contentLabel="Success"
        className="modal fixed inset-0 flex items-center justify-center"
        overlayClassName="overlay fixed inset-0 bg-black opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="prose text-center text-lg font-semibold mb-4">Email sent successfully!</p>
          <button
            onClick={handleSuccessClose}
            className="block mx-auto bg-green-500/70 text-white py-2 px-4 rounded hover:bg-accent-dark transition duration-300"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
