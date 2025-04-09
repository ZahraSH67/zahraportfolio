'use client'
import styles from '@/styles/Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Contact Me</h2>
          <p>Have a question or want to work together? Let’s connect!</p>
        </div>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className={styles.formGroup}>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className={styles.formGroup}>
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.sendButton}>Send Message</button>
        </form>
      </div>
    </section>
  )
}
