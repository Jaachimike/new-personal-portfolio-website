import {useState, ChangeEvent, FormEvent} from "react";
import {motion} from "framer-motion";
import contactImage from "../assets/jpg/63057135708.png";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://persoal-portfolio-contact-form-api.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle successful submission
        console.log("Form submitted successfully");
        // Clear form fields
        setFormData({name: "", email: "", message: ""});
      } else {
        // Handle error
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="py-8 sm:py-12 md:py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          {/* writeup */}
          <motion.div
            initial={{x: -40, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.4}}
            className="mb-10"
          >
            <h1 className="text-white text-3xl font-bold mb-6">
              You can reach me on here 👇🏾
            </h1>
          </motion.div>
          <form
            onSubmit={onSubmitForm}
            className="flex flex-col gap-4 text-black"
          >
            <motion.input
              initial={{x: -40, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.6}}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="py-3 px-5 rounded-xl"
            />
            <motion.input
              initial={{x: -40, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.8}}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="py-3 px-5 rounded-xl"
            />
            <motion.textarea
              initial={{x: -40, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 1.0}}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={10}
              placeholder="Your Message"
              className="py-3 px-5 rounded-xl"
            ></motion.textarea>
            <motion.input
              initial={{x: -40, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 1.2}}
              type="submit"
              value={isSubmitting ? "Sending ..." : "Send Now"}
              className="bg-gray-600 rounded-full py-2 hover:bg-gray-800 cursor-pointer text-white"
            />
          </form>
        </div>
        {/* image */}
        <motion.div
          initial={{x: 40, scale: 1.3, opacity: 0}}
          animate={{x: 0, scale: 1, opacity: 1}}
          transition={{duration: 0.5, delay: 1}}
          className="md:flex items-center hidden"
        >
          <img src={contactImage} alt="boy sitting on ground with laptop" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
