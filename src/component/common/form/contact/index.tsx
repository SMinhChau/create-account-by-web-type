import { useForm } from 'react-hook-form';
import './contact.css';

import ContactInfo from '@/component/contact/info';
import emailjs from 'emailjs-com';
import useNotification from '@/hook/useNotification';

type FormData = {
  username: string;
  message: string;
};

const FormContact = 'form-contact';

const ContactForm = () => {
  const { success, error } = useNotification() || { success: () => {}, error: () => {} };
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    SendEmail(data);
  };

  const SendEmail = (data: FormData) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAIL_USER_ID
      )
      .then(
        () => {
          success('Send success!');
          reset();
        },
        () => {
          error('Fail!');
        }
      );
  };

  return (
    <div className="form-content">
      <div className="item-info">
        <ContactInfo />
      </div>

      <form className="item-content" onSubmit={handleSubmit(onSubmit)} id={FormContact}>
        <div className="form-group">
          <input
            type="email"
            id="username"
            {...register('username')}
            placeholder=" "
            className="input-item peer"
          />

          <label
            htmlFor="username"
            className="
            peer-placeholder-shown:scale-100
            peer-focus:-translate-y-[11px] peer-focus:px-1 
            peer-placeholder-shown:translate-y-[13px]"
          >
            Password
          </label>
        </div>

        <div className="form-group">
          <textarea
            id="message"
            placeholder=" "
            {...register('message')}
            className="input-item peer scroll-y"
          />

          <label
            htmlFor="message"
            className="
            peer-placeholder-shown:scale-100
            peer-focus:-translate-y-[11px] peer-focus:px-1 
            peer-placeholder-shown:translate-y-[13px]"
          >
            Message
          </label>
        </div>

        <div className="wrapper-button">
          <button type="submit" form={FormContact} className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
