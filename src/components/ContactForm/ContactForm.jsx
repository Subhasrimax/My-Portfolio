import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fe7dc24c-d8a0-4744-80c3-c414e3d02750");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
    return(
    <footer id="contactform" className={styles.container}>
      <div className={styles.text}>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <form onSubmit={onSubmit}>
            <h2>Get in Touch</h2>
            <input type="text" id="name" name="name" placeholder="Your Name" required></input>
            <input type="email" id="email" name="email" placeholder="Email id" required></input>
            <input type="text" id="phone" name="phone" placeholder="Phone no." required ></input>
            <textarea id="message" rows="4" name="message" placeholder="Enter your message"></textarea>
            <button type="submit">Send</button>
        </form>
        </li>
      </ul>
    </footer>
  );
};

export default ContactForm;