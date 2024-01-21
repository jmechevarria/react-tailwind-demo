import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <section
        style={{
          background: "#F1ECE2",
        }}
        className="w-full h-dvh"
      >
        <div className="flex pt-80 justify-between px-20 gap-24">
          <div className="flex flex-col w-2/6">
            <h1 className="text-4xl uppercase text-black">Get on the list</h1>
            <br />
            <p>
              Please complete the form and one of our team members will be in
              touch with you soon.
            </p>
          </div>

          <form
            id={styles["contact-form"]}
            action=""
            className="w-1/2 flex flex-col pr-10 gap-4 "
          >
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Email" type="email" />
            <input placeholder="Phone" />
            <textarea placeholder="Comments"></textarea>
            <div className="flex justify-between">
              <Link
                to="#"
                className="bg-blue-950 py-2 px-6 text-white hover:bg-blue-950/50 transition-colors duration-500"
              >
                Submit
              </Link>
              <Link to="/" role="button" className="underline">
                Back home
              </Link>
            </div>
          </form>
          <div className="flex flex-col w-1/6 border-l border-blue-950 pl-5 gap-5">
            <div>
              <h1>SALES GALLERY</h1>
              <p className="text-sm">
                29 HURON STREET, BROOKLYN, NY 11222 646.863.1846
              </p>
            </div>
            <div>
              <h1>BUILDING ADDRESS</h1>
              <p className="text-sm">29 HURON STREET, BROOKLYN, NY 11222</p>
            </div>
            <div>
              <h1>GENERAL INQUIRIES</h1>
              <p className="text-sm">jmechevarria2015@gmail.com</p>
            </div>
            <div>
              <h1>PRESS INQUIRIES</h1>
              <p className="text-sm">nopress@nopress.nopress</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
