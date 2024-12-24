import './styled.css';

const Info = [
  { id: 1, label: 'address', value: 'Ho Chi Minh' },
  { id: 2, label: 'phone', value: '+84 795 815 992' },
  { id: 3, label: 'email', value: 'chaunguyen.141201@gmail.com' },
];

const ContactInfo = () => {
  return (
    <div className="contact-information">
      {Info.map((item, index) => (
        <div key={item.id || index} className="content-item">
          <div className="contact-label">{item.label}</div>
          <div className={`contact-value ${item.id === 3 && `email`} `}>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
