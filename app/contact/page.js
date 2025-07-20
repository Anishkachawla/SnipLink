"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // State to disable button during submission

    // Handler for all input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default browser form submission (page reload)
        setIsSubmitting(true); // Disable button

        // Basic client-side validation (can be more robust)
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) { // Check if the response status is 2xx (e.g., 200 OK)
                toast.success(result.message || 'Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear the form on success
            } else {
                // Handle API errors (e.g., validation errors returned from the server)
                toast.error(result.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Network error or server unavailable. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false); // Re-enable button regardless of success or failure
        }
    };

    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className='bg-gray-900/50 backdrop-blur-md rounded-xl shadow-2xl px-6 py-2 max-w-lg w-full flex flex-col border border-violet-700 text-white'>
                <h1 className='text-3xl md:text-4xl font-extrabold text-center tracking-wide'>
                    Contact Us
                </h1>
                <p className='text-lg leading-relaxed text-center'>
                    Have questions, feedback, or suggestions? We'd love to hear from you!
                    Please fill out the form below, and we'll get back to you as soon as possible.
                </p>

                {/* Form element with onSubmit handler */}
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div>
                        <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name" // Important: `name` attribute must match formData key
                            value={formData.name} // Controlled component
                            onChange={handleChange}
                            required // HTML5 validation
                            className='bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 w-full transition duration-300 ease-in-out'
                            placeholder='Your Name'
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email" // Important: `name` attribute must match formData key
                            value={formData.email} // Controlled component
                            onChange={handleChange}
                            required // HTML5 validation
                            className='bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 w-full transition duration-300 ease-in-out'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message" // Important: `name` attribute must match formData key
                            value={formData.message} // Controlled component
                            onChange={handleChange}
                            required // HTML5 validation
                            rows="5"
                            className='bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 w-full transition duration-300 ease-in-out resize-y'
                            placeholder='Your Message'
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting} // Disable button while submitting
                        className='bg-violet-700 hover:bg-violet-600 text-white font-bold py-4 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;