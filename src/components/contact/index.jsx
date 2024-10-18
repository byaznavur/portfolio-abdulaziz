import "./style.scss";
const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>

      <div className="contact-about">
        <div className="contact-info">
          <h3>Name: Abdulaziz</h3>
          <h3>Location: Toshkent/Yashnabod</h3>
          <h3>
            Telegram:{" "}
            <a
              href="https://t.me/abdukhakimov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abdulaziz
            </a>
          </h3>
          <h3>
            Phone Number: <a href="tel:+998996882812">+99899-688-28-12</a>
          </h3>
          <h3>
            Email:{" "}
            <a href="mailto:byabduhakimov@gmail.com">byabduhakimov@gmail.com</a>
          </h3>
        </div>
        <div className="contact-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.25298617416!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent!5e0!3m2!1sen!2s!4v1729281772196!5m2!1sen!2s"
            loading="lazy"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
