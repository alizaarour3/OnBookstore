import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const mapUrl = "https://www.google.com/maps/place/Kfar+Sal/@34.1347921,35.6280422,4353m/data=!3m2!1e3!4b1!4m15!1m8!3m7!1s0x151f5c8e16a1ba11:0xb4f17ed2cfece310!2sAamchit!3b1!8m2!3d34.1489249!4d35.6377739!16zL20vMGZrZzdo!3m5!1s0x151f5c9f58797ec3:0x38ca65bc46442b86!8m2!3d34.1347588!4d35.6486419!16s%2Fg%2F1tf8jzgg?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="display-4 text-center mb-5">Contact Us</h1>
          
          {/* Contact Information Cards */}
          <div className="row mb-5">
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="fs-1 text-primary mb-3">📍</div>
                  <h5>Address</h5>
                  <p className="mb-0">Amchit Kfarsela<br />Lebanon</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="fs-1 text-primary mb-3">📞</div>
                  <h5>Phone</h5>
                  <p className="mb-0">+961 81 667 908<br /><small>Mon-Fri: 9AM-6PM</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="fs-1 text-primary mb-3">✉️</div>
                  <h5>Email</h5>
                  <p className="mb-0">alizaarour983@gmail.com<br /><small>24-hour response</small></p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form and Map Section */}
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-6 mb-4">
              <div className="card shadow h-100">
                <div className="card-header bg-primary text-white">
                  <h4 className="mb-0 text-center">Send Us a Message</h4>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>
                    
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-lg w-100 py-3">
                        <span className="fs-5">Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="col-lg-6 mb-4">
              <div className="card shadow h-100">
                <div className="card-header bg-success text-white">
                  <h4 className="mb-0 text-center">Visit Our Store</h4>
                </div>
                <div className="card-body p-4">
                  {/* Google Maps Link */}
                  <div className="text-center mb-4">
                    <div className="fs-1 text-success mb-3">🏪</div>
                    <h5>BookStore Location</h5>
                    <p className="text-muted">
                      Come visit us in beautiful Amchit Kfarsela
                    </p>
                    
                    <a 
                      href={mapUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success btn-lg w-100 py-3 mb-3"
                    >
                      <span className="fs-5">📍 Open in Google Maps</span>
                    </a>
                    <p className="small text-muted">
                      Get directions to our bookstore
                    </p>
                  </div>

                  {/* Store Details */}
                  <div className="bg-light p-4 rounded mb-4">
                    <h6 className="border-bottom pb-2 mb-3">📋 Store Information</h6>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <strong>📍 Address:</strong>
                        <p className="mb-0 text-muted">Amchit Kfarsela, Lebanon</p>
                      </div>
                      <div className="col-12 mb-3">
                        <strong>📞 Phone:</strong>
                        <p className="mb-0 text-muted">+961 81 667 908</p>
                      </div>
                      <div className="col-12 mb-3">
                        <strong>✉️ Email:</strong>
                        <p className="mb-0 text-muted">alizaarour983@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-warning bg-opacity-10 p-4 rounded">
                    <h6 className="border-bottom pb-2 mb-3">🕒 Business Hours</h6>
                    <div className="row">
                      <div className="col-6">
                        <strong>Mon - Fri:</strong>
                      </div>
                      <div className="col-6 text-muted">
                        9:00 AM - 6:00 PM
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <strong>Saturday:</strong>
                      </div>
                      <div className="col-6 text-muted">
                        10:00 AM - 4:00 PM
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <strong>Sunday:</strong>
                      </div>
                      <div className="col-6 text-muted">
                        Closed
                      </div>
                    </div>
                  </div>

                  {/* Additional Contact Options */}
                  <div className="mt-4 text-center">
                    <h6>Other Ways to Reach Us</h6>
                    <div className="d-flex justify-content-center gap-3">
                      <a 
                        href={`tel:+96181667908`}
                        className="btn btn-outline-primary"
                      >
                        📞 Call Now
                      </a>
                      <a 
                        href={`mailto:alizaarour983@gmail.com`}
                        className="btn btn-outline-success"
                      >
                        ✉️ Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card bg-light border-0">
                <div className="card-body text-center py-4">
                  <h3 className="mb-3">Need Immediate Assistance?</h3>
                  <p className="lead mb-4">
                    Feel free to call us directly or send us an email. We're here to help!
                  </p>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <a 
                        href={`tel:+96181667908`}
                        className="btn btn-primary btn-lg w-100 py-3"
                      >
                        <span className="fs-4">📞 Call +961 81 667 908</span>
                      </a>
                    </div>
                    <div className="col-md-6 mb-3">
                      <a 
                        href={`mailto:alizaarour983@gmail.com`}
                        className="btn btn-success btn-lg w-100 py-3"
                      >
                        <span className="fs-4">✉️ Email Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;