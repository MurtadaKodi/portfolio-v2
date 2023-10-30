import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done4Animation from "../../animation/done4.json";
import contactAnimation from "../../animation/contact-us.json";




const Contact = () => {
  const [state, handleSubmit] = useForm("xgejdodj");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail_outline"></span>
        Contact Us
      </h1>
      <p className="sub-title">hiougfjdxjvbbkhg</p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Adress</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting......" : "Submit"}
          </button>
          {state.submitting && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7px" }}
            >
              <Lottie
                loop={false}
                style={{ height: 50 }}
                animationData={done4Animation}
              />
              <h1 className="title" >Thank you &#128076; your message has been sent successfully</h1>
            
            </p>
          )}
        </form>
        <div className="animation2  ">
        <Lottie className="contact-animation "
                loop={true}
                style={{ height:250,width:250}}
                animationData={contactAnimation}
              />
        </div>
      </div>
    </section>
  );
};

export default Contact;
