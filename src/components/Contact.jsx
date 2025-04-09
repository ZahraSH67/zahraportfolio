// 'use client'
// import styles from '@/styles/Contact.module.css'

// export default function Contact() {
//   return (
//     <section className={styles.contactSection} id="contact">
//       <div className={styles.container}>
//         <div className={styles.sectionTitle}>
//           <h2>Contact Me</h2>
//           <p>Have a question or want to work together? Let’s connect!</p>
//         </div>

//         <form className={styles.contactForm}   action="https://formspree.io/f/xvgkdoqg" method="POST">
//           <div className={styles.formGroup}>
//             <input type="text" placeholder="Your Name" required />
//           </div>
//           <div className={styles.formGroup}>
//             <input type="email" placeholder="Your Email" required />
//           </div>
//           <div className={styles.formGroup}>
//             <textarea placeholder="Your Message" rows="5" required></textarea>
//           </div>
//           <button type="submit" className={styles.sendButton}>Send Message</button>
//         </form>
//       </div>
//     </section>
//   )
// }




'use client'
import { useState } from 'react'
import styles from '@/styles/Contact.module.css'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
  
    try {
      const response = await fetch('https://formspree.io/f/xvgkdoqg', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })
  
      const result = await response.json()
      console.log('Formspree Response:', result)  // 👈 مهم!
  
      if (response.ok) {
        setIsSubmitted(true)
        console.log("submitted!") 
        form.reset()
        setTimeout(() => setIsSubmitted(false), 8000)
      } else {
        console.error('Form error:', result)
      }
    } catch (error) {
      console.error('Submission error:', error)
    }
  }
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const form = e.target
  //   const data = new FormData(form)
  
  //   try {
  //     const response = await fetch('https://formspree.io/f/xvgkdoqg', {
  //       method: 'POST',
  //       body: data,
  //       headers: {
  //         'Accept': 'application/json'
  //       }
  //     })
  
  //     if (response.ok) {
  //       setIsSubmitted(true)
  //       form.reset()
  
  //       setTimeout(() => {
  //         setIsSubmitted(false)
  //       }, 8000)
  //     } else {
  //       console.error('Form not submitted successfully')
  //     }
  //   } catch (error) {
  //     console.error('Form submission error:', error)
  //   }
  // }
  
  

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const form = e.target
  //   const data = new FormData(form)

  //   fetch('https://formspree.io/f/xvgkdoqg', {
  //     method: 'POST',
  //     body: data
  //   })
  //     .then(() => {
  //       setIsSubmitted(true)
  //       form.reset()

  //       // پیام تشکر بعد از 4 ثانیه مخفی میشه
  //       setTimeout(() => {
  //         setIsSubmitted(false)
  //       }, 4000)
  //     })
  //     .catch((error) => {
  //       console.error('Form submission error:', error)
  //     })
  // }

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Contact Me</h2>
          <p>Have a question or want to work together? Let’s connect!</p>
        </div>

        {isSubmitted ? (
          <div className={styles.thankYou}>
            <div className={styles.icon}>🎉</div>
            <h3>Thank you for your message!</h3>
            <p>I’ll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input type="text" name="name" placeholder="Your name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" name="email" placeholder="Your email" required />
            </div>
            <div className={styles.formGroup}>
              <textarea name="message" placeholder="Your message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.sendButton}>Send Message</button>
          </form>
        )}
      </div>
    </section>
  )
}
