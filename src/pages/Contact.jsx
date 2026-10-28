import './Contact.css';
import { useState } from 'react';

function Contact() {
    const [sent, setSent] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSent(true);
    }

    return (
        <main className="contact-page">
            <h1>Contact us</h1>
            <p className="contact-lead">
                Questions about an order or a product? Send a note and we will get back to you.
            </p>

            <div className="contact-layout">
                <section className="contact-details">
                    <h2>Store desk</h2>
                    <p><strong>Email</strong> hello@coursestore.example</p>
                    <p><strong>Phone</strong> (555) 010-0109</p>
                    <p><strong>Hours</strong> Monday–Friday, 9:00–5:00</p>
                </section>

                {sent ? (
                    <p className="contact-thanks">Thanks. Your message is noted for this visit.</p>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>
                            Name
                            <input type="text" name="name" placeholder="Your name" required />
                        </label>
                        <label>
                            Email
                            <input type="email" name="email" placeholder="you@email.com" required />
                        </label>
                        <label>
                            Message
                            <textarea name="message" rows="4" placeholder="How can we help?" required />
                        </label>
                        <button type="submit">Send message</button>
                    </form>
                )}
            </div>
        </main>
    );
}

export default Contact;
