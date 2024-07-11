import { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import DeliveryMan from '../models/DeliveryMan.jsx'
import Loader from '../components/Loader.jsx';
import { Canvas } from '@react-three/fiber';
import Alert from '../components/Alert.jsx';
import useAlert from '../hooks/useAlert.js';

const Contact = () => {
  const formRef = useRef(null);
  const [form,setForm] = useState({name: '',email: '',message: ''})
  const [currentAnimation,setCurrentAnimation] = useState('Idle')
  const [isLoading, setIsLoading] = useState(false);

  const {alert,showAlert,hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  const handleFocus = () => setCurrentAnimation('Dizzy');
  const handleBlur = () => setCurrentAnimation('Idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Fall');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Nigel",
        from_email: form.email,
        to_email: "nigelbomett@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setIsLoading(false);
      showAlert({show:true,text:'Message sent successfully!',type:'success'})
      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('Idle');
        setForm({ name: '', email: '', message: '' });
      },[3000])
      
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('Hit');
      console.log(error);
      showAlert({ show: true, text: 'I did not receive your message 😔', type: 'danger' })
    })
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert}/>}
      
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
        ref={formRef}
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name="name"
              className='input'
              placeholder='Brian'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name="email"
              className='input'
              placeholder='brian@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea
              name="message"
              rows={4}
              className='textarea'
              placeholder='How may I be of service?'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
          <Canvas
            camera={{
              position: [0,0,5],
              fov:75,
              near:0.1,
              far:1000
            }}
          >
            <directionalLight intensity={0.5} position={[0,0,1]}/>
            <ambientLight intensity={0.5}/>
            <Suspense fallback={<Loader/>}>
              <DeliveryMan
                currentAnimation={currentAnimation}
                position={[0,-1,-1]}
                rotation={[0,0,0]}
                scale={[1,1,1]}
              />
            </Suspense>
          </Canvas>
      </div>
    </section>
  )
}

export default Contact